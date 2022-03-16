import CryptoJs from 'crypto-js'
import React, { Component } from 'react'
import './landingPage.css'
import AES from 'crypto-js/aes'

export class LandingPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bill: '',
            customTip: '',
            persons: 1,
            totalTip: '₹' + 0,
            totalAmount: '₹' + 0
        }
    }
    handleChange = (e) => {
        // e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
        const { bill, persons, customTip } = this.state
        let totalTip = customTip
        console.log(totalTip)
        if (e.target.name === 'customTip') {
            let total = (parseInt(this.state.bill) + parseInt(e.target.value)) / this.state.persons
            this.setState({
                totalTip: '₹' + e.target.value,
                totalAmount: total
            })
        }
    }

    handleClick = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        let tip = this.state.bill * (e.target.value / 100)
        let total = (parseInt(this.state.bill) + tip) / this.state.persons
        this.setState({
            totalTip: tip,
            customTip: '',
            totalAmount: total
        })
    }

    reset = (e) => {
        this.setState({
            bill:'',
            persons: 1,
            totalTip: '₹' + 0,
            totalAmount: '₹' + 0,
            customTip:''
        })
    }
    render() {
        console.log(this.state.totalTip)
        return (
            <div className='container'>
                <label className='brand-header'>SPLI<br /><span>TTER</span></label>
                <div className='card-container'>
                    <div className='card-light'>
                        <div className='form-inputs'>
                            <span className="input-title">BILL</span>
                            <div className='input-grp'>
                                <span className='inr'>₹</span>
                                <input className='input-field' name='bill' value={this.state.bill} autoComplete='off' onChange={this.handleChange}></input>
                            </div>
                            <span className="input-title">NUMBER OF PEOPLE</span>
                            <div className='input-grp'>
                                <span className='user'></span>
                                <input type='number' className='input-field' name='persons' value={this.state.persons} onChange={this.handleChange}></input>
                            </div>
                            <span className="input-title2">SELECT TIP %</span>
                            <div className='btn-grps'>
                                <div className='btn-grp1'>
                                    <button className='tip-btn1' name='tipBtn' value={5} onClick={this.handleClick}>5%</button>
                                    <button className='tip-btn' name='tipBtn' value={10} onClick={this.handleClick}>10%</button>
                                    <button className='tip-btn' name='tipBtn' value={15} onClick={this.handleClick}>15%</button>
                                </div>
                                <div className='btn-grp2'>
                                    <button className='tip-btn1' name='tipBtn' value={25} onClick={this.handleClick}>25%</button>
                                    <button className='tip-btn' name='tipBtn' value={50} onClick={this.handleClick}>50%</button>
                                    <input className='tip-btn2' name='customTip' value={this.state.customTip} placeholder='CUSTOM' onChangeCapture={this.handleChange}></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-dark'>
                        <div className='tip-display'>
                            <label className='tip-heading'>Tip Amount<br /><span className='tip-span'>/ person</span></label>
                            <input type="text" className='tip-count' value={this.state.totalTip} disabled />
                        </div>
                        <div className='tip-display2'>
                            <label className='tip-heading'>Total<br /><span className='tip-span'>/ person</span></label>
                            <input type="text" className='tip-count' value={this.state.totalAmount} disabled />
                        </div>
                        <button className='btn-reset' onClick={this.reset}>RESET</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage