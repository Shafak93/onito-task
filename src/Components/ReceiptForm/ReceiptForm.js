import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import {v4 as uuid} from 'uuid';


const initialState ={
    date:'',
    amount:'',
    paymentMethod:'cash',
    remark:''
}
const ReceiptForm = () => {
    const [state,setState] = useState(initialState)
    const [items, setItems] = useState([])


    const onInputChange = e => {
        const {name,value}  = e.target;
        setState(prev=>({
            ...prev,
            [name]:value
        }))
    }

    const handleAddItem = (event) =>{
        event.preventDefault();
        setItems(prev=>[...prev, {...state,rowId:uuid()} ])
        setState(initialState)
    }

    return (
        <div className='container w-50 mt-5'>
            <Form onSubmit={handleAddItem} autoComplete="off">
                <Form.Group className="mb-3 d-flex justify-content-between align-items-center" controlId="formBasicDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control className='w-75' name='date' type="date" placeholder="Enter date" value={state.date} onChange={onInputChange} required/>
                </Form.Group>
                <Form.Group className="mb-3 d-flex justify-content-between align-items-center" controlId="formBasicAmount">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control className='w-75' name='amount' type="number" placeholder="Enter Amount (in INR)" value={state.amount} onChange={onInputChange} required/>
                </Form.Group>
                <Form.Group className="mb-3 d-flex justify-content-between align-items-center" controlId="formBasicPayment">
                    <Form.Label>Payment Mode</Form.Label>
                    <select name='paymentMethod' className="w-75" id="inlineFormCustomSelect"  onChange={onInputChange} required>
                        <option value="Cash">Cash</option>
                        <option value="Cheque">Cheque</option>
                        
                    </select>
                </Form.Group>
                <Form.Group className="mb-3 d-flex justify-content-between align-items-center" controlId="formBasicRemark">
                    <Form.Label>Remark</Form.Label>
                    <Form.Control name='remark' className='w-75' type="taxt" placeholder="Enter Remark" value={state.remark} onChange={onInputChange} required/>
                </Form.Group>

                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <div className='mt-5'>
                {items.length > 0 && (
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Payment</th>
                <th>Remark</th>
                </tr>
            </thead>
            <tbody>
                {items.map(rec=>(
                   <tr key={rec.rowId}>
                   <td>{rec.date}</td>
                   <td>{rec.amount}</td>
                   <td>{rec.paymentMethod}</td>
                   <td>{rec.remark}</td>
                   </tr> 
                ))}
                
            </tbody>
            </Table>
                )}

            </div>
        </div>
    );
};

export default ReceiptForm;