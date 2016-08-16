const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const browserHistory = ReactRouter.browserHistory;

ReactDOM.render(
<div>
	<Nav />
  	<Router history={browserHistory}>
    	<Route path="/" component={Hello}/>
  	</Router>
  	<Footer />
 </div>,
  document.getElementById('root')
);
