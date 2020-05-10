import React from "react";

class Pricing extends React.Component {
  state = {
    priceInputValue: "1",
    priceInput: {
      0: "Basic",
      1: "Enterprise+",
      2: "Enterprise+ CRM Edition",
      3: "Gainsight Edition"
    },
    priceOutput: {
      plan1: {
        0: ["$", "1,500", "/m"],
        1: ["$", "5,000", "/m"],
        2: ["$", "10,000", "/m"],
        3: ["$", "10,000+", "/m"]
      },
      plan2: {
        0: ["", "Contact Us", ""],
        1: ["", "Contact Us", ""],
        2: ["", "Contact Us", ""],
        3: ["", "Contact Us", ""]
      },
      baseFeatures: {
        a: {
          0: "Custom Catalog or Portal",
          1: "CRM Integration",
          2: "Guided Buying & Selling",
          3: "Onboard Delivery Partners"
        },
        b: {
          0: "15 Application Users",
          1: "Data Push & Pull",
          2: "Catalog & Portal Integration",
          3: "Task Delegation" //assign work
        },
        c: {
          0: "API and Catalog Hosting", //access customer success
          1: "Leverage Existing Logic",
          2: "API Integration Library", //access customer success & integration library
          3: "Progress Management/Dashboard"
        },
        d: {
          0: "Dedicated CSM",
          1: "",
          2: "",
          3: "Delivery Tool Integration"
        }
      },
      isChecked: {
        a: {
          0: "is-checked",
          1: "is-checked",
          2: "is-checked",
          3: "is-checked"
        },
        b: {
          0: "is-checked",
          1: "is-checked",
          2: "is-checked",
          3: "is-checked"
        },
        c: {
          0: "is-checked",
          1: "is-checked",
          2: "is-checked",
          3: "is-checked"
        },
        d: {
          0: "is-checked",
          1: "",
          2: "",
          3: "is-checked"
        }
      }
    }
  };

  slider = React.createRef();
  sliderValue = React.createRef();

  componentDidMount() {
    this.slider.current.setAttribute("min", 0);
    this.slider.current.setAttribute(
      "max",
      Object.keys(this.state.priceInput).length - 1
    );
    this.thumbSize = parseInt(
      window
        .getComputedStyle(this.sliderValue.current)
        .getPropertyValue("--thumb-size"),
      10
    );
    this.handleSliderValuePosition(this.slider.current);
  }

  handlePricingSlide = e => {
    this.setState({ priceInputValue: e.target.value });
    this.handleSliderValuePosition(e.target);
  };

  handleSliderValuePosition = input => {
    const multiplier = input.value / input.max;
    const thumbOffset = this.thumbSize * multiplier;
    const priceInputOffset =
      (this.thumbSize - this.sliderValue.current.clientWidth) / 2;
    this.sliderValue.current.style.left = `${input.clientWidth * multiplier -
      thumbOffset +
      priceInputOffset}px`;
  };

  getPricingData = (obj, pos) => {
    return pos !== undefined
      ? obj[this.state.priceInputValue][pos]
      : obj[this.state.priceInputValue];
  };

  render() {
    return (
      <div className="pricing">
        <div className="pricing-slider center-content">
          <label className="form-slider">
            <span>What Base Package Matches Your Service Needs?</span>
            <input
              type="range"
              ref={this.slider}
              defaultValue={this.state.priceInputValue}
              onChange={this.handlePricingSlide}
            />
          </label>
          <div ref={this.sliderValue} className="pricing-slider-value">
            {this.getPricingData(this.state.priceInput)}
          </div>
        </div>

        <div className="pricing-items">
          <div className="pricing-item">
            <div className="pricing-item-inner">
              <div className="pricing-item-content">
                <div className="pricing-item-header center-content">
                  <div className="pricing-item-title">
                    {this.getPricingData(this.state.priceInput)}
                  </div>
                  <div className="pricing-item-price">
                    <span className="pricing-item-price-currency">
                      {this.getPricingData(this.state.priceOutput.plan1, 0)}
                    </span>
                    <span className="pricing-item-price-amount">
                      {this.getPricingData(this.state.priceOutput.plan1, 1)}
                    </span>
                    {this.getPricingData(this.state.priceOutput.plan1, 2)}
                  </div>
                </div>
                <div className="pricing-item-features">
                  <ul className="pricing-item-features-list">
                    <li
                      className={this.getPricingData(
                        this.state.priceOutput.isChecked.a
                      )}
                    >
                      {this.getPricingData(
                        this.state.priceOutput.baseFeatures.a
                      )}
                    </li>
                    <li
                      className={this.getPricingData(
                        this.state.priceOutput.isChecked.b
                      )}
                    >
                      {this.getPricingData(
                        this.state.priceOutput.baseFeatures.b
                      )}
                    </li>
                    <li
                      className={this.getPricingData(
                        this.state.priceOutput.isChecked.c
                      )}
                    >
                      {this.getPricingData(
                        this.state.priceOutput.baseFeatures.c
                      )}
                    </li>
                    <li
                      className={this.getPricingData(
                        this.state.priceOutput.isChecked.d
                      )}
                    >
                      {this.getPricingData(
                        this.state.priceOutput.baseFeatures.d
                      )}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pricing-item-cta">
                <a
                  className="button"
                  href="https://workrails.netlify.app/quote"
                >
                  Select this to Start
                </a>
              </div>
            </div>
          </div>

          <div className="pricing-item">
            <div className="pricing-item-inner">
              <div className="pricing-item-content">
                <div className="pricing-item-header center-content">
                  <div className="pricing-item-title">
                    I Need All That and More!
                  </div>
                  <div className="pricing-item-price">
                    <span className="pricing-item-price-currency">
                      {this.getPricingData(this.state.priceOutput.plan2, 0)}
                    </span>
                    <span className="pricing-item-price-amount">
                      {this.getPricingData(this.state.priceOutput.plan2, 1)}
                    </span>
                    {this.getPricingData(this.state.priceOutput.plan2, 2)}
                  </div>
                </div>
                <div className="pricing-item-features">
                  <ul className="pricing-item-features-list">
                    <li className="">Excepteur sint occaecat</li>
                    <li className="">Excepteur sint occaecat</li>
                    <li className="">Excepteur sint occaecat</li>
                    <li className="">Excepteur sint occaecat</li>
                    <li className="">Excepteur sint occaecat</li>
                  </ul>
                </div>
              </div>
              <div className="pricing-item-cta">
                <a
                  className="button"
                  href="https://workrails.netlify.app/quote"
                >
                  Select this to Start
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="container margin_60_35">
          <div class="row">
            <div class="col-lg-8">
              <h3>Choose Your Add-Ons.</h3>
              <p>
                Select from one of the add-ons listed below to generate an
                estimated cost sheet.
              </p>
              <div>
                <div id="message-contact" />
                <form
                  method="post"
                  action="assets/contact.php"
                  id="contactform"
                >
                  <div class="row">
                    <div class="col-md-6 col-sm-6">
                      <div class="form-group">
                        <h5>Classification Group A</h5>
                        <label for="addon1">Additional Item #1</label>
                        <select
                          class="form-control"
                          id="name_contact"
                          name="addon1"
                          placeholder="Solomon"
                        >
                          <option value="addonSel" selected>
                            Select an item
                          </option>
                          <option value="addonA">Add-on A</option>
                          <option value="addonB">Add-on B</option>
                          <option value="addonC">Add-on C</option>
                        </select>
                        <br />
                        <label for="addon2">Additional Item #2</label>
                        <select
                          class="form-control"
                          id="name_contact"
                          name="addon2"
                          placeholder="Solomon"
                        >
                          <option value="addonSel" selected>
                            Select an item
                          </option>
                          <option value="addonA">Add-on A</option>
                          <option value="addonB">Add-on B</option>
                          <option value="addonC">Add-on C</option>
                        </select>
                        <br />
                        <label for="addon1">Additional Item #3</label>
                        <select
                          class="form-control"
                          id="name_contact"
                          name="addon1"
                          placeholder="Solomon"
                        >
                          <option value="addonSel" selected>
                            Select an item
                          </option>
                          <option value="addonA">Add-on A</option>
                          <option value="addonB">Add-on B</option>
                          <option value="addonC">Add-on C</option>
                        </select>
                        <br />
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                      <h5>Classification Group B</h5>
                      <label for="addon1">Additional Item #1</label>
                      <select
                        class="form-control"
                        id="name_contact"
                        name="addon1"
                        placeholder="Solomon"
                      >
                        <option value="addonSel" selected>
                          Select an item
                        </option>
                        <option value="addonA">Add-on A</option>
                        <option value="addonB">Add-on B</option>
                        <option value="addonC">Add-on C</option>
                      </select>
                      <br />
                      <label for="addon2">Additional Item #2</label>
                      <select
                        class="form-control"
                        id="name_contact"
                        name="addon2"
                        placeholder="Solomon"
                      >
                        <option value="addonSel" selected>
                          Select an item
                        </option>
                        <option value="addonA">Add-on A</option>
                        <option value="addonB">Add-on B</option>
                        <option value="addonC">Add-on C</option>
                      </select>
                      <br />
                      <label for="addon1">Additional Item #3</label>
                      <select
                        class="form-control"
                        id="name_contact"
                        name="addon1"
                        placeholder="Solomon"
                      >
                        <option value="addonSel" selected>
                          Select an item
                        </option>
                        <option value="addonA">Add-on A</option>
                        <option value="addonB">Add-on B</option>
                        <option value="addonC">Add-on C</option>
                      </select>
                      <br />
                    </div>
                  </div>
                  <div class="row">
                    <h5>Classification Group C</h5>
                  </div>
                  <div class="row">
                    <div class="col-md-4 col-sm-4">
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                      />
                      <label for="male">Add-on A</label>
                      <br />
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                      />
                      <label for="female">Add-on B</label>
                      <br />
                      <input
                        type="radio"
                        id="other"
                        name="gender"
                        value="other"
                      />
                      <label for="other">Add-on C</label>
                      <br />
                      <br />
                    </div>
                    <div class="col-md-4 col-sm-4">
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                      />
                      <label for="male">Add-on A</label>
                      <br />
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                      />
                      <label for="female">Add-on B</label>
                      <br />
                      <input
                        type="radio"
                        id="other"
                        name="gender"
                        value="other"
                      />
                      <label for="other">Add-on C</label>
                      <br />
                      <br />
                    </div>
                    <div class="col-md-4 col-sm-4">
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                      />
                      <label for="male">Add-on A</label>
                      <br />
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                      />
                      <label for="female">Add-on B</label>
                      <br />
                      <input
                        type="radio"
                        id="other"
                        name="gender"
                        value="other"
                      />
                      <label for="other">Add-on C</label>
                      <br />
                      <br />
                    </div>
                  </div>
                  <div class="row">
                    <p>
                      Vestibulum est ex, eleifend tempor dapibus id, scelerisque
                      ac mauris. Nulla facilisis consequat elit vitae aliquam.
                      Mauris in risus et magna malesuada fermentum.
                    </p>
                  </div>
                  <div class="row">
                    <div class="col-sm-4 col-md-4">
                      <p>
                        <input
                          type="submit"
                          value="Generate Cost Sheet"
                          class="btn_1 add_bottom_15"
                          id="submit-contact"
                        />
                      </p>
                    </div>
                    <div class="col-md-4 col-sm-4">
                      <p>
                        <input
                          type="submit"
                          value="Generate MSA"
                          class="btn_1 add_bottom_15"
                          id="submit-contact"
                        />
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <aside class="col-lg-4">
              <div class="box_style_2">
                <h4>Estimated Cost Sheet.</h4>
                <table class="cost-sheet-tally">
                  <thead>
                    <tr>
                      <td width="200">
                        <b>
                          <u>Add-On</u>
                        </b>
                      </td>
                      <td>
                        <b>
                          <u>Est. Cost</u>
                        </b>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Base Package</td>
                      <td>$3,000</td>
                    </tr>
                    <tr>
                      <td>Add Item #1</td>
                      <td>$3,000</td>
                    </tr>
                    <tr>
                      <td>Add Item #2</td>
                      <td>$1,000</td>
                    </tr>
                    <tr>
                      <td>Add Item #3</td>
                      <td>$2,000</td>
                    </tr>
                    <tr>
                      <td>Add Item #4</td>
                      <td>$5,000</td>
                    </tr>
                    <tr>
                      <td>Add Item #5</td>
                      <td>$7,000</td>
                    </tr>
                    <tr>
                      <td>Add Item #6</td>
                      <td>$2,000</td>
                    </tr>
                    <tr>
                      <td>Add Item #7</td>
                      <td>$4,000</td>
                    </tr>
                    <tr>
                      <td>Add Item #8</td>
                      <td>$12,000</td>
                    </tr>
                    <tr>
                      <td>Add Item #9</td>
                      <td>$8,000</td>
                    </tr>
                    <tr>
                      <td>Add Item #10</td>
                      <td>$9,000</td>
                    </tr>
                    <tr>
                      <td>
                        <em>
                          <b>Estimated Total</b>
                        </em>
                      </td>
                      <td>
                        <em>
                          <b>$6,000 /m</b>
                        </em>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <hr class="styled" />
                <h6>Pricing Disclaimers.</h6>
                <p>
                  Although the information in this price list is presented in
                  good faith and believed to be correct at the time of printing,
                  IQC makes no representations or warranties as to the
                  completeness or accuracy of the information. IQC has no
                  liability for any errors or omissions in the materials.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    );
  }
}

export default Pricing;
