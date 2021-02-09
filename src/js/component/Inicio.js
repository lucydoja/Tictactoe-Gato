import React from "react";

export class Tictactoe extends React.Component {
	constructor() {
		super();
		this.state = {
			valores: [
				Array(3).fill(null),
				Array(3).fill(null),
				Array(3).fill(null)
			],
			jugador1: "Jugador 1",
			jugador2: "Jugador 2",
			turnoX: true,
			iniciar: false,
			estado: ""
		};
		this.cuadrado = this.cuadrado.bind(this);
		this.OnClick = this.OnClick.bind(this);
		this.ganador = this.ganador.bind(this);
		this.cambioEstado = this.cambioEstado.bind(this);
		/*
		this.tunoXO = this.turnoXO.bind(this);

		/*
		this.startTimer = this.startTimer.bind(this);
		this.stopTimer = this.stopTimer.bind(this);
		this.resetTimer = this.resetTimer.bind(this);*/
	}

	cuadrado(i, j) {
		return (
			<div className="cuadrados" onClick={() => this.OnClick(i, j)}>
				{this.state.valores[i][j]}
			</div>
		);
	}

	OnClick(i, j) {
		this.cambioEstado(i, j);
		this.ganador(i, j);
	}

	cambioEstado(i, j) {
		let estado = this.state.turnoX
			? "Es el turno de: " + this.state.jugador1
			: "Es el turno de: " + this.state.jugador2;
		/* copiar el array en vez de escribirle encima es mejor practica */
		var valores = this.state.valores.slice();
		valores[i][j] = this.state.turnoX ? "X" : "O";
		let turnoX = !this.state.turnoX;
		this.setState({ valores: valores, turnoX: turnoX, estado: estado });
	}

	ganador(i, j) {
		let valores = this.state.valores;
		let long = valores.length;
		let contador = 0;
		for (i = 0; i < long; i++) {
			if (valores[i][i] == "X") {
				contador += 1;
				if (contador == 3) {
					let estado =
						"FIN DEL JUEGO! Ha ganado: " + this.state.jugador1;
					this.setState({ estado: estado });
				}
			} else if (valores[i][i] == "O") {
				contador += 1;
				if (contador == 3) {
					let estado =
						"FIN DEL JUEGO! Ha ganado: " + this.state.jugador2;
					this.setState({ estado: estado });
				}
			}
		}
	}

	render() {
		if (this.state.iniciar == false) {
			return (
				<div>
					<div className="row justify-content-center mt-4">
						<h1 id="cabeza"> Juego Tic Tac Toe</h1>
					</div>
					<div
						className="d-flex flex-column justify-content-center"
						id="inicio">
						<div className="m-4 ">
							<h2>Elige tu arma</h2>
						</div>
						<form>
							<div className="d-flex justify-content-center">
								<div className="m-2 d-flex flex-column align-items-center">
									<h1>
										<strong>X</strong>
									</h1>
									<input
										className="form-control"
										type="text"
										placeholder="Jugador 1"
										onChange={e => {
											this.setState({
												jugador1: e.target.value
											});
										}}
										required
									/>
								</div>
								<div className="m-2  d-flex flex-column align-items-center">
									<h1>
										<strong>O</strong>
									</h1>
									<input
										className="form-control"
										type="text"
										placeholder="Jugador 2"
										onChange={e => {
											this.setState({
												jugador2: e.target.value
											});
										}}
										required
									/>
								</div>
							</div>

							<button
								type="submit"
								className="btn btn-primary btn-lg  m-4"
								onClick={() => {
									this.setState({
										iniciar: true
									});
								}}>
								<strong>Iniciar juego</strong>
							</button>
						</form>
					</div>
				</div>
			);
		} else if (this.state.iniciar == true) {
			return (
				<div>
					<div className="d-flex justify-content-center" id="cuerpo">
						<button
							type="button"
							className="btn btn-primary btn-lg mt-4 m-2"
							onClick={() => {
								this.setState({
									valores: [
										Array(3).fill(null),
										Array(3).fill(null),
										Array(3).fill(null)
									],
									turnoX: true,
									estado: ""
								});
							}}>
							<strong>Reset</strong>
						</button>
						<button
							type="button"
							className="btn btn-primary btn-lg mt-4 m-2"
							onClick={() => {
								this.setState({
									valores: [
										Array(3).fill(null),
										Array(3).fill(null),
										Array(3).fill(null)
									],
									turnoX: true,
									iniciar: false,
									estado: ""
								});
							}}>
							<strong>Star over</strong>
						</button>
					</div>
					<div className="board-row">
						{this.cuadrado(0, 0)}
						{this.cuadrado(0, 1)}
						{this.cuadrado(0, 2)}
					</div>
					<div className="board-row">
						{this.cuadrado(1, 0)}
						{this.cuadrado(1, 1)}
						{this.cuadrado(1, 2)}
					</div>
					<div className="board-row">
						{this.cuadrado(2, 0)}
						{this.cuadrado(2, 1)}
						{this.cuadrado(2, 2)}
					</div>
					<div>{this.state.estado}</div>
				</div>
			);
		}
	}
}
