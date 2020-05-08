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
      </div>
    );
  }
}

export default Pricing;
