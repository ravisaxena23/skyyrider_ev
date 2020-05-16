import React, { Component } from "react/index.js";
import Grid from "@material-ui/core/Grid";
import CardHeader from "../cards/CardHeader.js";
import CardIcon from "../cards/CardIcon.js";
import Card from "../cards/Card.js";
import withStyles from "@material-ui/core/styles/withStyles";
import Snackbar from "../snackbar/snackbar";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import { styles } from "../../styles/style";
import Loader_Con from "../../containers/loader/loader_cont";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from '@material-ui/core/Checkbox';
import Add_vendors_cont from "../../containers/vendors/add_vendors_cont"

const card = {
    borderRadius: "20px",
    backgroundColor: "#ffffff",
    marginTop: 50

};
class View_admin_vendors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            editredirect: false,
            parent_name: "",
            name: "",
            all_data: {},
            view_single_vendor: false,
            vendor_id: "",
            id: "",
            vendor_payment_type: "",
            amount: "",
            confirm_delete: false,
            add_vendor_redirect: false,
            is_fixed_payment:false,
        }
    }

    componentDidMount() {
        this.props.get_building_vendors(this.props.login.token, this.props.login.building_id, this.props.vendors.limit, this.props.vendors.starting_after)
    }
    checkRedirect = () => {
        this.setState({
            redirect: true,
        })
    }

    handleFunc = (event) => {
        this.setState({
            check: !this.state.check
        })
    }

    del_single_row = (row) => {
        this.setState({
            confirm_delete: true,
            id: row.vendor_id,
        })
    }

    render() {
        if (this.state.add_vendor_redirect === true) {
            return <Redirect to="/add_vendor" />
        }
        var btn;
        const {
            vendors,
            units,
            login,
            assign_vendor,
            snackbar,
            close_snack_bar,
            update_unit_type,
            delete_single_vendor,
            view_single_vendor_info,
            set_vendor_name,
            set_vendor_service,
            set_license_no,
            payment_type,
            set_fixed_amount,
            set_account_no,
            set_bank_name,
            set_bank_ifsc,
            set_vendor_contact,
            set_is_fixed,
            validate_single_vendor,
            prev_btn,
            next_btn,
            set_bank_branch,
            toggleCheckbox
        } = this.props;
        if (vendors.total > vendors.limit) {
            if (vendors.end_var === vendors.total) {
                btn = <span >
                    <IconButton
                        onClick={() => { prev_btn(login.token, login.building_id, vendors.limit, vendors.starting_after); }}
                    >
                        <Icon>navigate_before</Icon>
                    </IconButton>

                    <IconButton disabled>
                        <Icon>navigate_next</Icon>
                    </IconButton>
                    {vendors.start_var}&nbsp;&nbsp;-&nbsp;&nbsp;{vendors.end_var}&nbsp;&nbsp;out of&nbsp;&nbsp;{vendors.total}
                </span>
            }
            else if (vendors.start_var > vendors.limit && vendors.end_var < vendors.total) {
                btn = <span >
                    <IconButton
                        onClick={() => { prev_btn(login.token, login.building_id, vendors.limit, vendors.starting_after); }}
                    >
                        <Icon>navigate_before</Icon>
                    </IconButton>

                    <IconButton
                        onClick={() => { next_btn(login.token, login.building_id, vendors.limit, vendors.starting_after); }}
                    >
                        <Icon>navigate_next</Icon>
                    </IconButton>
                    {vendors.start_var}&nbsp;&nbsp;-&nbsp;&nbsp;{vendors.end_var}&nbsp;&nbsp;out of&nbsp;&nbsp;{vendors.total}
                </span>

            }
            else {
                btn =
                    <span >
                        <IconButton disabled>
                            <Icon>navigate_before</Icon>
                        </IconButton>

                        <IconButton
                            onClick={() => { next_btn(login.token, login.building_id, vendors.limit, vendors.starting_after); }}
                        >
                            <Icon>navigate_next</Icon>
                        </IconButton>
                        {vendors.start_var}&nbsp;&nbsp;-&nbsp;&nbsp;{vendors.end_var}&nbsp;&nbsp;out of&nbsp;&nbsp;{vendors.total}
                    </span>

            }
        }
        else {
            btn = <span >
                <IconButton disabled>
                    <Icon>navigate_before</Icon>
                </IconButton>

                <IconButton disabled
                >
                    <Icon>navigate_next</Icon>
                </IconButton>
                {vendors.start_var}&nbsp;&nbsp;-&nbsp;&nbsp;{vendors.end_var}&nbsp;&nbsp;out of&nbsp;&nbsp;{vendors.total}
            </span>
        }
        return (
            <Grid container spacing={8} justify="center">
                <Grid item sm={12}>
                    <Card style={card}>
                        <CardHeader color="warning" stats icon>
                            <CardIcon color="rose">
                                <h3>
                                    VIEW VENDORS
                </h3>
                            </CardIcon>

                        </CardHeader>
                        <CardContent >

                            <Grid item xs={12} >
                                <IconButton
                                    onClick={this.checkRedirect.bind(this)}
                                >
                                    <Icon >add</Icon>
                                </IconButton>
                                <div style={{ float: "right" }}>
                                    {btn}
                                </div><br /><br />
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="left">&nbsp;&nbsp;&nbsp;Name</TableCell>
                                            <TableCell align="left">Service</TableCell>
                                            <TableCell align="left">Contact number</TableCell>
                                            <TableCell align="right">Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {vendors.all_vendors.map(row => (
                                            <TableRow >
                                                <TableCell align="left" className="table_cells">
                                                    <Checkbox
                                                        checked={row.checked}
                                                        size="small"
                                                        onChange={() => {
                                                            toggleCheckbox(row, vendors.all_vendors)
                                                        }}
                                                    />
                                                    &nbsp;&nbsp;{row.vendor_name}
                                                </TableCell>
                                                <TableCell align="left" className="table_cells">
                                                    {row.vendor_service}
                                                </TableCell>
                                                <TableCell align="left" className="table_cells">
                                                    {row.vendor_contact_info}
                                                </TableCell>
                                                <TableCell align="right" className="table_cells">
                                                    <IconButton
                                                        onClick={() => {
                                                            this.del_single_row(row)
                                                        }}
                                                    >
                                                        <Icon >delete</Icon>
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Grid>

                        </CardContent>

                    </Card>
                    <Dialog
                        open={this.state.confirm_delete}
                        // onClose={this.state.editredirect}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">Are you sure you want to delete it</DialogTitle>
                        <DialogContent>
                        </DialogContent>
                        <DialogContent>

                        </DialogContent>
                        <DialogActions>
                            <Button
                                //  style={buttonnn} 
                                onClick={() => {
                                    this.setState({
                                        confirm_delete: false,
                                        id: "",
                                    });
                                }}
                                color="primary">
                                No
                            </Button>
                            <Button

                                onClick={() => {
                                    delete_single_vendor(this.props.login.token, this.state.id, login.building_id, vendors)
                                    this.setState({
                                        confirm_delete: false,
                                        id: "",
                                    })

                                }}
                                color="primary" autoFocus>
                                Yes
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <Dialog
                        open={this.state.redirect}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                        scroll={'paper'}
                    >
                        <DialogTitle id="alert-dialog-title">Select Vendor</DialogTitle>
                        <DialogContent>

                            <TextField
                                id="outlined-email-input"
                                label="Vendor Payment Type"
                                fullWidth
                                select
                                margin="normal"
                                variant="outlined"
                                value={this.state.vendor_payment_type}
                                onChange={(event) => { this.setState({ vendor_payment_type: event.target.value }) }}
                                InputProps={{ classes: { input: this.props.classes.dropDown } }}
                                InputLabelProps={{ classes: { root: this.props.classes.textfieldLabel } }}
                            >
                                <MenuItem value={"Credit"}>{"Credit"}</MenuItem>
                                <MenuItem value={"Debit"}>{"Debit"}</MenuItem>
                                <MenuItem value={"Both"}>{"Both"}</MenuItem>

                            </TextField>

                            <TextField
                                id="outlined-email-input"
                                label="Amount(Optional)"
                                type="text"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                value={this.state.amount}
                                onChange={(event) => { this.setState({ amount: event.target.value }) }}
                                InputProps={{ classes: { input: this.props.classes.textfield } }}
                                InputLabelProps={{ classes: { root: this.props.classes.textfieldLabel } }}
                            />
                            <input
                                type="checkbox"
                                // checked={this.state.is_fixed_payment}
                                value={this.state.is_fixed_payment}
                                onClick={(event) => { this.setState({is_fixed_payment:!(this.state.is_fixed_payment)}) }}
                            />Is Amount Fixed
                            <br /><br />
                            <Button variant="outlined" color="primary"
                                onClick={() => {
                                    this.setState({
                                        add_vendor_redirect: true,
                                        redirect: false
                                    })
                                }}
                            >
                                ADD A New Vendor
            </Button>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">&nbsp;&nbsp;Vendor Name</TableCell>
                                        <TableCell align="left">Service</TableCell>
                                        <TableCell align="left">Contact number</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody >
                                    {vendors.all_vendors.map(row => (
                                        <TableRow key={row._id} >
                                            <TableCell align="left" className="table_cells">
                                                <input type="radio"
                                                    value={this.state.id}
                                                    name="vehicles"
                                                    onChange={(e) => {
                                                        this.setState({ id: e.target.value })
                                                    }} />
                                                {row.vendor_name}
                                            </TableCell>
                                            <TableCell align="left" className="table_cells">
                                                {row.vendor_service}
                                            </TableCell>
                                            <TableCell align="left" className="table_cells">
                                                {row.vendor_contact_info}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </DialogContent>
                        <DialogActions>
                            <Button
                                onClick={() => {
                                    this.setState({
                                        redirect: false,
                                        id: "",
                                        vendor_payment_type: "",
                                        amount: "",
                                    });
                                }}
                                color="primary">
                                Cancel
            </Button>
                            <Button
                                onClick={() => {
                                    assign_vendor(login.token, login.building_id, this.state.id, this.state.vendor_payment_type, this.state.is_fixed_payment, this.state.amount, vendors.limit, vendors.starting_after);
                                    this.setState({
                                        redirect: false,
                                        id: "",
                                        vendor_payment_type: "",
                                        amount: "",
                                    })
                                }}
                                color="primary">
                                Add
            </Button>
                        </DialogActions>
                    </Dialog>
                    <Loader_Con />
                    <Snackbar
                        open={snackbar.response_received}
                        close_snack_bar={close_snack_bar}
                        message={snackbar.message}
                    />
                </Grid>
            </Grid>
        );
    }
}
export default withStyles(styles)(View_admin_vendors);