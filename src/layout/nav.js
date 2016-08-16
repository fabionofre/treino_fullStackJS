class Nav extends React.Component {
  render() {
    return (
 		<nav className="navbar navbar-default">
			<div className="container">
				<div className="navbar-header">
					<button className="navbar-toggle collapsed" data-target="#navbar" data-toggle="collapse">
						<span className="sr-only"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>

					<a className="navbar-brand"></a>
				</div>

				<div className="collapse navbar-collapse" id="navbar">
					<ul className="nav navbar-nav">
						<li><a href="">Home</a></li>
					</ul>
					<ul className="nav navbar-nav navbar-right">
						<li><a href="">New Tweet</a></li>
					</ul>
				</div>
			</div>
		</nav>     
    );
  }
}