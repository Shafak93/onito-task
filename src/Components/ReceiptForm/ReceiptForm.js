import React from 'react';
import { Button, Form } from 'react-bootstrap';


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
        <div>
            <Form onSubmit={handleAddItem} autoComplete="off">
                <Form.Group className="mb-3 d-flex justify-content-between align-items-center" controlId="formBasicDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control className='w-75' name='date' type="date" placeholder="Enter date" value={state.date} onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3 d-flex justify-content-between align-items-center" controlId="formBasicAmount">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control className='w-75' name='amount' type="text" placeholder="Enter Amount (in INR)" value={state.amount} onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3 d-flex justify-content-between align-items-center" controlId="formBasicPayment">
                    <Form.Label>Payment Mode</Form.Label>
                    <select name='paymentMethod' className="w-75" id="inlineFormCustomSelect"  onChange={onInputChange}>
                        <option value="Cash">Cash</option>
                        <option value="Cheque">Cheque</option>
                        
                    </select>
                </Form.Group>
                <Form.Group className="mb-3 d-flex justify-content-between align-items-center" controlId="formBasicRemark">
                    <Form.Label>Remark</Form.Label>
                    <Form.Control name='remark' className='w-75' type="taxt" placeholder="Enter Remark" value={state.remark} onChange={onInputChange}/>
                </Form.Group>

                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default ReceiptForm;