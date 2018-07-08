import React, { Component } from 'react';
import './modalPopUp.css';

export class ModalPopUp extends React.Component{
  modalClose(){
    this.props.clearPopUpState();
  }
  render(){ 
    const styleObject={display: (!this.props.showPopUp)?"none":"block"};

    return  <div id="myModal" className="modal" style={styleObject}>
        <div className="modal-content">
            <div className="modal-header">
              <span className="close" onClick={(e)=> {e.stopPropagation(); this.modalClose();}}>&times;</span>
            </div>
            <div className="modal-body">
                {this.props.children()}
            </div>
            <div className="modal-footer">
            </div>
        </div>

      </div>
  }
}