import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class CardBody extends Component {
//   static propTypes = {second: third}

  render() {
    return (
      <div className={`shadow-lg relative border-t-4
   ${this.props.borderColor} `}>
       <div className='w-11/12 flex flex-col items-center px-8 py-3 card-body'>
        <div className='self-start w-full'>
        <h3 className='font-bold text-gray-600	'>{this.props.title}</h3>
        <h6 className='font-light text-gray-400 mt-3'>{this.props.caption}</h6>
        </div>
        <div className='self-end float-right card-icon'>
            <img src={this.props.icon} alt="icon"/>
        </div>
       </div>
      </div>
    )
  }
}
