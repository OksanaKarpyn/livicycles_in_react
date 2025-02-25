import React from "react";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // methods
  renderObj = () => {
    let out = [];
    for (let key in this.props.cart) {
      let goods = this.getGoodsFromArr(key);
      console.log(goods);
      out.push(
        <tr key={key}>
          <td>{goods["title"]}</td>
          <td>{this.props.cart[key]}</td>
          <td>{this.props.cart[key] * goods["cost"]}</td>
        </tr>
      );
    }
    return out;
  };
  ////////
  getGoodsFromArr = (art) => {
    console.log(this.props.goods);
    for (let i = 0; i < this.props.goods.length; i++) {
      if (art === this.props.goods[i]["articul"]) {
        return this.props.goods[i];
      }
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="cart-field">
          <h1>Корзина</h1>
          <table>
            <tbody>
              <tr>
                <th>Art</th>
                <th>Count</th>
                <th>Cost</th>
              </tr>
              {this.renderObj()}
            </tbody>
          </table>
        </div>
        <div>sono cart component</div>
      </React.Fragment>
    );
  }
}

export default Cart;
