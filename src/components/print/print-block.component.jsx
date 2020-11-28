import React from 'react'
import {connect} from 'react-redux'

const  PrintBlock = ({storeSurname , storeName , UserId}) => {
    // console.log(UserId)
    // console.log(storeName)
    return (
        <div className="card shadow-sm ml-5">
        <div className = 'card-body'>
           <h5>I       <u> {` ${storeName && storeSurname ? storeSurname +' ' + storeName:'................................................................'} `}</u>
           </h5>



           <div className="doc-preview">
        <p style={{boxSizing: 'inherit', lineHeight: '1.8', color: 'rgb(48, 51, 54)'}}>This Memorandum of Understanding (the&nbsp;<strong style={{boxSizing: 'inherit'}}>“MOU”</strong>) is entered into ____________________ (the&nbsp;<strong style={{boxSizing: 'inherit'}}>“Effective Date”</strong>), by and between ________________________, with an address of _____________________________ (the&nbsp;<strong style={{boxSizing: 'inherit'}}>“[Name]”</strong>) and _________________, with an address of _______________________________, (the&nbsp;<strong style={{boxSizing: 'inherit'}}>“[Name]”</strong>), collectively “the&nbsp;<strong style={{boxSizing: 'inherit'}}>Parties.</strong>”<br style={{boxSizing: 'inherit'}} /></p><p style={{boxSizing: 'inherit', lineHeight: '1.8', color: 'rgb(48, 51, 54)'}}>WHEREAS, the Parties desire to enter into an agreement to __________________________________________________________________________; and</p><p style={{boxSizing: 'inherit', lineHeight: '1.8', color: 'rgb(48, 51, 54)'}}>WHEREAS, the Parties desire to memorialize certain terms and conditions of their anticipated endeavor;</p><p style={{boxSizing: 'inherit', lineHeight: '1.8', color: 'rgb(48, 51, 54)'}}>NOW THEREFORE, in consideration of the mutual promises and covenants contained herein, the Parties agree as follows:</p><p style={{boxSizing: 'inherit', lineHeight: '1.8', color: 'rgb(48, 51, 54)'}}>1.&nbsp;&nbsp;<strong style={{boxSizing: 'inherit'}}>Purpose and Scope.</strong>&nbsp;The Parties intend for this MOU to provide the foundation and structure for any and all possibly anticipated binding agreement related to _____________</p><ol style={{boxSizing: 'inherit', color: 'rgb(48, 51, 54)'}} />
      </div>















           <p>loremipsum loremipsumloremipsumloremipsumloremi ipsumloremi ipsumloremi ipsumloremi ipsumlori </p>
        </div>
        </div>
    )
}
const mapStateToProps = (state) => (
    {
        storeSurname:state.detail.surname,
        storeName:state.detail.name,
        UserId:state.userId
    }
);
export default connect(mapStateToProps)(PrintBlock)


