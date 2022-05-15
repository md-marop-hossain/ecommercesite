import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Dashboard.css';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import { Button } from '@mui/material';
// import DashboardHome from '../DashboardHome/DashboardHome';
// import AddReview from '../AddReview/AddReview';
// import AddNewCar from '../AddNewCar/AddNewCar';
// import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
// import Payment from '../Payment/Payment';
// import ManageProducts from '../ManageProducts/MangeProducts/ManageProducts';
import { useHistory } from "react-router-dom";
import useAuth from '../../../../hooks/useAuth';
import AddNewProduct from '../AddNewProduct/AddNewProduct';
import MyOrder from '../MyOrder/MyOrder';
import Payment from '../../payment/Payment';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import AdminRoute from '../../../Login/AdminRoute/AdminRoute';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ContactPageInformation from '../ContactPageInformation/ContactPageInformation';


const drawerWidth = 200;

function Dashboard(props) {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin, logout } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const history = useHistory();
    const handleLogoutRedirect = () => {
        logout();
        history.push('/home');
    }

    const drawer = (
        <div >
            <Toolbar />
            {/* <Divider /> */}
            <Link className="adminroute-button" to="/home"><Button color="inherit"><i class="far fa-arrow-alt-circle-left"></i>Back To home page</Button></Link> <Divider />

            <NavLink className="adminroute-button"
                activeStyle={{
                    fontWeight: "bold",
                    color: "orange"
                }} to={`${url}`}><Button color="inherit">Dashboard</Button></NavLink><br /><br />
            <Divider />

            {
                !admin && <Box>

                    <NavLink className="adminroute-button"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "green"
                        }} to={`${url}/myOrder`}><Button color="inherit">My Order <i class="fas fa-angle-double-right ml-2"></i></Button></NavLink>
                    <Divider />



                    {/* <NavLink className="adminroute-button"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "green"
                        }}
                        to={`${url}/review`}><Button color="inherit">Add Review<i class="fas fa-angle-double-right ml-2"></i></Button></NavLink>
                    <Divider />

                    <NavLink className="adminroute-button"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "green"
                        }}
                        to={`${url}/payment`}><Button color="inherit">Payment<i class="fas fa-angle-double-right ml-2"></i></Button></NavLink> */}
                    <Divider />
                    <br /><br />
                </Box>


            }




            {admin && <Box>

                <div className="admin-div">
                    <h6 className="admin-panel">admin panel<i class="fas fa-users-cog ml-2"></i></h6>
                </div>

                <NavLink className="adminroute-button"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "green"
                    }}
                    to={`${url}/manageProducts`}><Button color="inherit">Manage Products<i class="fas fa-angle-double-right ml-2"></i></Button></NavLink><br />
                <Divider />

                <NavLink className="adminroute-button"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "green"
                    }}
                    to={`${url}/manageAllOrders`}><Button color="inherit">Manage All Orders<i class="fas fa-angle-double-right ml-2"></i></Button></NavLink>
                <Divider />

                <NavLink className="adminroute-button"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "green"
                    }}
                    to={`${url}/addNewProduct`}><Button color="inherit">Add New Product<i class="fas fa-angle-double-right ml-2"></i></Button></NavLink><br />
                <Divider />

                <NavLink className="adminroute-button"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "green"
                    }}
                    to={`${url}/makeAdmin`}><Button color="inherit">Make Admin<i class="fas fa-angle-double-right ml-2"></i></Button></NavLink><br />
                <Divider />
                <NavLink className="adminroute-button"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "green"
                    }}
                    to={`${url}/contactPageInfo`}><Button color="inherit">Contact Info.<i class="fas fa-angle-double-right ml-2"></i></Button></NavLink><br />
                <Divider /> <br /><br /><br />


            </Box>}

            <p>
                <Button className="logoutbutton" onClick={handleLogoutRedirect}>
                    Log out  <i class="fas fa-sign-out-alt ml-2"></i>
                </Button>
            </p>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                className="bg-c"
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" className="dashboard-header">
                        TechTrans Dashboard
                    </Typography>

                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        {/* <DashboardHome></DashboardHome> */}
                    </Route>


                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>

                    <Route path={`${path}/myOrder`}>
                        <MyOrder></MyOrder>
                    </Route>
                    <Route path={`${path}/contactPageInfo`}>
                        <ContactPageInformation></ContactPageInformation>
                    </Route>

                    <Route path={`${path}/payment/:productId`}>
                        <Payment></Payment>
                    </Route>

                    {/* <Route path={`${path}/review`}>
                        <AddReview></AddReview>
                    </Route> */}
                    <Route exact path={`${path}/addNewProduct`}>
                        <AddNewProduct></AddNewProduct>
                    </Route>
                    <Route path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </Route>
                    {/* <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route> */}
                    <Route path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </Route>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
