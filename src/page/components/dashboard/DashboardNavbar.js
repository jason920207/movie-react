import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import Badge from '@material-ui/core/Badge'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { fade } from '@material-ui/core/styles/colorManipulator'
import { withStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MailIcon from '@material-ui/icons/Mail'
import NotificationsIcon from '@material-ui/icons/Notifications'
// import MoreIcon from '@material-ui/icons/MoreVert'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
// import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    width: '100%'
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
})

class PrimarySearchAppBar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    })
  }

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget })
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null })
    this.handleMobileMenuClose()
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget })
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null })
  };

  render () {
    const { anchorEl, mobileMoreAnchorEl } = this.state
    const { classes } = this.props
    const isMenuOpen = Boolean(anchorEl)
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

    const sideList = (
      <div className={classes.list}>
        <List>
          <Link to='/'><ListItem button onClick={this.clickHandle}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItem>
          </Link>
          <Link to='/dashboard'><ListItem button onClick={this.clickHandle}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary={'Dashboard'} />
          </ListItem>
          </Link>

          <Link to='/dashboard/createmovie'>
            <ListItem button onClick={this.clickHandle}>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary={'Create New Movie'} />
            </ListItem>
          </Link>

          <Link to='/dashboard/movies'>
            <ListItem button onClick={this.clickHandle}>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary={'DashBoard Movies'} />
            </ListItem>
          </Link>

          <Link to='/movies'>
            <ListItem button onClick={this.clickHandle}>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary={'Movies'} />
            </ListItem>
          </Link>
          { this.props.user.email === 'na@na'
            ? <Link to='/dashboard/games'>
              <ListItem button onClick={this.clickHandle}>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary={'臭猪的私密小天地'} />
              </ListItem>
            </Link>
            : ''
          }
          <Link to='/change-password'>
            <ListItem button onClick={this.clickHandle}>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary={'Change Password'} />
            </ListItem>
          </Link>

          <Link to='/sign-out'>
            <ListItem button onClick={this.clickHandle}>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary={'Sign Out'} />
            </ListItem>
          </Link>

        </List>
      </div>
    )

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    )

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    )

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <div>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
                onClick={this.toggleDrawer('left', true)}>
                <MenuIcon />
              </IconButton>
              <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                <div
                  tabIndex={0}
                  role="button"
                  onClick={this.toggleDrawer('left', false)}
                  onKeyDown={this.toggleDrawer('left', false)}
                >
                  {sideList}
                </div>
              </Drawer>
            </div>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              <Link to='/dashboard' variant="h6" color="inherit">Dashboard</Link>
            </Typography>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
            <div className={classes.grow} />
            {/* <div className={classes.sectionDesktop}>
                <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div> */}
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </div>
    )
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(PrimarySearchAppBar)
