import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Grid extends React.Component {

render()
{
	const width=this.props.cols *14;
	const rowsArr=[];

	var boxClass="";


	for (var i=0; i<this.pros.rows; i++)
	{
		for (var j=0; j<this.pros.rows; j++)
		{
				let boxId=i +"_"+j;
				boxClass=this.props.gridFull[i][j] ? "box on": "box off" ;
				rowsArr.push(
					<Box
						boxClass={}

					)
		}

	}


return (

	<div className="grid" style={{width:width}}	>]
{{rowsArr}}

	</div>
);
}

}

class Main extends React.Component {

	constructor(){
		super();
		this.speed=100;
		this.rows=30;
		this.cols=50;
		this.state={
			generation:0,
			gridFull: Array(this.rows).fill(Array(this.cols).fill(false)
		}

	}

render()
{

return (

	<div>




	<h1>The Game Of Life</h1>

	<Grid gridFull={this.state.gridFull} rows={this.state.rows} cols={this.state.cols} />
	<h2>Generations: {this.state.generation}</h2>


	</div>




	);

}



}


ReactDOM.render(<Main />, document.getElementById('root'));

