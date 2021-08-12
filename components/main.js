
import { Component } from 'react'
import MenuDetails from './menu/menu-details/MenuDetails';
import OrderDetails from './order-summary/order-details/OrderDetails';
import PaymentWindow from './payment/payment-window/PaymentWindow';

class MainPage extends Component {
    componentDidMount() {
        fetch(`http://kq00g.mocklab.io/categories`)
            .then(res => res.json())
            .then(json => this.setState({
                categories: this.cleanCategories(json),
                viewCategories: json,
                addedItems: [],
                total: 0,
                orderType: "dinein",
                orderNumber: 1,
                success: false
            }));
    }

    cleanCategories = (categories) => {
        return categories.filter(it => it.dishes.length != 0)
    }

    onCategoryClick = (categoryId) => {
        this.state.categories.map(category => {
            if (category.id === categoryId) {
                category.active = true;
            } else {
                category.active = false;
            }
        });

        this.setState({ categories: this.state.categories, viewCategories: this.cleanCategories(this.state.categories) });
    };

    onSearch = (e) => {
        let viewCategories = this.state.categories ? JSON.parse(JSON.stringify(this.state.categories)) : [];

        if (e.target.value != null && e.target.value.trim() != "") {
            viewCategories.map(category => {
                category.dishes = category.dishes.filter(it => it.name.toLowerCase().includes(e.target.value.toLowerCase()))
            })
        }

        viewCategories = this.cleanCategories(viewCategories);
        this.setState({ viewCategories: viewCategories });
    };

    onDishClick = (dish) => {
        let addedItems = this.state.addedItems ? this.state.addedItems : [];

        let item = addedItems.find(it => it.id === dish.id);

        if (item) {
            item.quantity++;
        } else {
            addedItems.push({
                id: dish.id, image: dish.image, name: dish.name, price: dish.price, quantity: 1, notes: ""
            })
        }

        this.setState({ addedItems: addedItems });
        this.updateTotal();
    }

    onQuantityChange = (e, dish) => {
        let addedItems = this.state.addedItems ? this.state.addedItems : [];

        let item = addedItems.find(it => it.id === dish.id);

        let validNumber = typeof e.target.value == "string" && !isNaN(e.target.value) && !isNaN(parseFloat(e.target.value));

        if (item) {
            if (validNumber) {
                item.quantity = e.target.value;
                this.setState({ addedItems: addedItems });
            } else {
                item.quantity = 1;
                this.setState({ addedItems: addedItems });
            }
        }
    }

    onNotesChange = (e, dish) => {
        let addedItems = this.state.addedItems ? this.state.addedItems : [];

        let item = addedItems.find(it => it.id === dish.id);

        if (item) {
            item.notes = e.target.value;
            this.setState({ addedItems: addedItems });
        }
    }

    onDeleteClick = (dishId) => {
        e.preventDefault();
        let addedItems = this.state.addedItems ? this.state.addedItems : [];
        let itemIndex = addedItems.findIndex(it => it.id === dishId);

        if (itemIndex > -1) {
            addedItems.splice(itemIndex, 1);
        }

        this.setState({ addedItems: addedItems });
        this.updateTotal();
    }

    onOrderTypeChange = (orderType) => {
        this.setState({ orderType: orderType });
    }

    updateTotal = () => {
        let addedItems = this.state.addedItems ? this.state.addedItems : [];

        let total = 0;

        addedItems.forEach(dish => {
            total += dish.quantity * dish.price;
        });

        this.setState({ total: total });
    }

    submitPaymentForm = () => {
        this.setState({ addedItems: [], total: 0, success: true });
    }

    clearPayment = (e) => {
        e.preventDefault();
        this.setState({ success: false, orderNumber: ++this.state.orderNumber });
    }

    render() {
        return (
            <>
                <MenuDetails categories={this.state ? this.state.viewCategories : null}
                    onCategoryClick={this.onCategoryClick}
                    onSearch={this.onSearch}
                    onDishClick={this.onDishClick}>
                </MenuDetails>
                <OrderDetails dishes={this.state ? this.state.addedItems : []}
                    orderNumber={this.state ? this.state.orderNumber : 1}
                    total={this.state ? this.state.total : 0}
                    onQuantityChange={this.onQuantityChange}
                    onNotesChange={this.onNotesChange}
                    onDeleteClick={this.onDeleteClick}
                    orderType={this.state ? this.state.orderType : "dinein"}
                    onOrderTypeChange={this.onOrderTypeChange}>
                </OrderDetails>
                <PaymentWindow dishes={this.state ? this.state.addedItems : []}
                    orderNumber={this.state ? this.state.orderNumber : 1}
                    total={this.state ? this.state.total : 0}
                    onQuantityChange={this.onQuantityChange}
                    onNotesChange={this.onNotesChange}
                    onDeleteClick={this.onDeleteClick}
                    onSubmit={this.submitPaymentForm}
                    orderType={this.state ? this.state.orderType : "dinein"}
                    onOrderTypeChange={this.onOrderTypeChange}
                    clearPayment={this.clearPayment}
                    success={this.state ? this.state.success : false}>
                </PaymentWindow>
            </>

        )
    }
}

export default MainPage
