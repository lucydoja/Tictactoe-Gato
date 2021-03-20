import React from "react";

// This game was developed following a matrix structure, this will allow the game to grow in rows and columns easily

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
			estado: "",
			ganador: false
		};

		this.cuadrado = this.cuadrado.bind(this);
		this.ganador1 = this.ganador1.bind(this);
		this.ganador2 = this.ganador2.bind(this);
		this.ganador3 = this.ganador3.bind(this);
		this.ganador4 = this.ganador4.bind(this);
		this.empate = this.empate.bind(this);
		this.cambioEstado = this.cambioEstado.bind(this);
	}
	//This generates the squares that are the base for the game and asigns the values in the matrix
	cuadrado(i, j) {
		return (
			<div
				className="cuadrados text-center"
				onClick={() => this.cambioEstado(i, j)}>
				{this.state.valores[i][j]}
			</div>
		);
	}

	// Status change, puts the X or O when the player clicks and stores its values
	cambioEstado(i, j) {
		/* copiar el array en vez de escribirle encima es mejor practica */
		let valores = this.state.valores.slice();
		if (valores[i][j] == null && this.state.ganador == false) {
			valores[i][j] = this.state.turnoX ? "X" : "O";
			let estado = this.state.turnoX
				? "Es el turno de: " + this.state.jugador2
				: "Es el turno de: " + this.state.jugador1;
			let turnoX = !this.state.turnoX;
			this.setState({ valores: valores, turnoX: turnoX, estado: estado });
			this.empate(i, j);
		}
		this.ganador1(i, j);
		this.ganador2(i, j);
		this.ganador3(i, j);
		this.ganador4(i, j);
	}

	// Checks the diagonal from top-left to bottom-right for a winner
	ganador1(i, j) {
		let valores = this.state.valores;
		let long = valores.length;
		let contador = 0;
		for (i = 0; i < long - 1; i++) {
			if (
				valores[i][i] != null &&
				valores[i][i] == valores[i + 1][i + 1]
			) {
				contador += 1;
				if (contador == 2) {
					let estado =
						valores[i][i] == "X"
							? "FIN DEL JUEGO! Ha ganado: " + this.state.jugador1
							: "FIN DEL JUEGO! Ha ganado: " +
							  this.state.jugador2;

					this.setState({ estado: estado, ganador: true });
				}
			}
		}
	}

	// Checks horizontally for a winner
	ganador2(i, j) {
		let valores = this.state.valores;
		let long = valores.length;

		for (i = 0; i < long; i++) {
			let contador = 0;
			for (j = 0; j < long - 1; j++)
				if (
					valores[i][j] != null &&
					valores[i][j] == valores[i][j + 1]
				) {
					contador += 1;
					if (contador == 2) {
						let estado =
							valores[i][j] == "X"
								? "FIN DEL JUEGO! Ha ganado: " +
								  this.state.jugador1
								: "FIN DEL JUEGO! Ha ganado: " +
								  this.state.jugador2;

						this.setState({ estado: estado, ganador: true });
					}
				}
		}
	}

	// Checks vertically for a winner
	ganador3(i, j) {
		let valores = this.state.valores;
		let long = valores.length;

		for (j = 0; j < long; j++) {
			let contador = 0;
			for (i = 0; i < long - 1; i++)
				if (
					valores[i][j] != null &&
					valores[i][j] == valores[i + 1][j] &&
					this.state.ganador == false
				) {
					contador += 1;
					if (contador == 2) {
						let estado =
							valores[i][j] == "X"
								? "FIN DEL JUEGO! Ha ganado: " +
								  this.state.jugador1
								: "FIN DEL JUEGO! Ha ganado: " +
								  this.state.jugador2;

						this.setState({ estado: estado, ganador: true });
					}
				}
		}
	}
	// Checks the diagonal from top-right to bottom-left for a winner
	ganador4(i, j) {
		let valores = this.state.valores;
		let long = valores.length;
		let contador = 0;
		j = long - 1;

		for (i = 0; i < long - 1; i++) {
			console.log(i, j);
			if (
				valores[i][j] != null &&
				valores[i][j] == valores[i + 1][j - 1] &&
				this.state.ganador == false
			) {
				contador += 1;
				if (contador == 2) {
					let estado =
						valores[i][j] == "X"
							? "FIN DEL JUEGO! Ha ganado: " + this.state.jugador1
							: "FIN DEL JUEGO! Ha ganado: " +
							  this.state.jugador2;

					this.setState({ estado: estado, ganador: true });
				}
				j -= 1;
			}
		}
	}

	// Checks if no one won
	empate(i, j) {
		let valores = this.state.valores;
		let long = valores.length;
		let contador = 0;
		for (i = 0; i < long; i++) {
			for (j = 0; j < long; j++) {
				if (valores[i][j] != null && this.state.ganador == false) {
					contador += 1;

					if (contador == long * long) {
						let estado = "Es un empate";
						this.setState({ estado: estado });
					}
				}
			}
		}
	}

	render() {
		// Starting page
		if (this.state.iniciar == false) {
			return (
				<div className="container">
					<div className="row justify-content-center mt-4">
						<h1 id="cabeza">Tic Tac Toe</h1>
					</div>
					<div
						className="d-flex flex-column justify-content-center"
						id="inicio">
						<div className="m-4 ">
							<h2>Elige tu arma</h2>
						</div>
						<form
							onSubmit={() => {
								this.setState({
									iniciar: true,
									estado: `${this.state.jugador1} haz la primer jugada`
								});
							}}>
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
											if (e.target.value != "") {
												this.setState({
													jugador1: e.target.value
												});
											}
										}}
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
											if (e.target.value != "") {
												this.setState({
													jugador2: e.target.value
												});
											}
										}}
									/>
								</div>
							</div>

							<button
								type="submit"
								className="btn btn-primary btn-lg  m-4">
								<strong>Iniciar juego</strong>
							</button>
						</form>
					</div>
				</div>
			);
			// Game starts here
		} else if (this.state.iniciar == true) {
			return (
				<div className="container">
					<div
						className="d-flex justify-content-center my-4"
						id="estado">
						<span className="text-center">{this.state.estado}</span>
					</div>
					<div id="juego">
						<div className="d-flex justify-content-center">
							{this.cuadrado(0, 0)}
							{this.cuadrado(0, 1)}
							{this.cuadrado(0, 2)}
						</div>
						<div className="d-flex justify-content-center">
							{this.cuadrado(1, 0)}
							{this.cuadrado(1, 1)}
							{this.cuadrado(1, 2)}
						</div>
						<div className="d-flex justify-content-center">
							{this.cuadrado(2, 0)}
							{this.cuadrado(2, 1)}
							{this.cuadrado(2, 2)}
						</div>
					</div>
					<div className="d-flex justify-content-center" id="cuerpo">
						<button
							type="button"
							className="btn btn-outline-light btn-lg mt-4 m-2"
							onClick={() => {
								this.setState({
									valores: [
										Array(3).fill(null),
										Array(3).fill(null),
										Array(3).fill(null)
									],
									turnoX: true,
									estado: `${this.state.jugador1} haz la primer jugada`,
									ganador: false
								});
							}}>
							<strong>Reset</strong>
						</button>
						<button
							type="button"
							className="btn btn-outline-light btn-lg mt-4 m-2"
							onClick={() => {
								this.setState({
									valores: [
										Array(3).fill(null),
										Array(3).fill(null),
										Array(3).fill(null)
									],
									turnoX: true,
									iniciar: false,
									estado: `${this.state.jugador1} haz la primer jugada`,
									ganador: false,
									jugador2: "Jugador 2",
									jugador1: "Jugador 1"
								});
							}}>
							<strong>Start over</strong>
						</button>
					</div>
				</div>
			);
		}
	}
}
