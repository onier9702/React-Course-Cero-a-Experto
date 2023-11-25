
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { startLogin, startRegister } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import './Login.css';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [formLoginValues, handleLoginInputChange] = useForm({
        logEmail: 'onier@gmail.com',
        logPassword: '123456',
    });

    const [formRegisterValues, handleRegisterInputChange] = useForm({
        regName: 'Bern',
        regEmail: 'bern@gmail.com',
        regPassword1: '123456',
        regPassword2: '123456',
    });

    const { logEmail , logPassword } = formLoginValues;

    const {regName, regEmail, regPassword1, regPassword2} = formRegisterValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch( startLogin(logEmail , logPassword) );

    };

    const handleRegister = (e) => {
        e.preventDefault();

        if( regPassword1 !== regPassword2 ){
            return Swal.fire('Error', 'Passwords have to be equal', 'error');
        }

        dispatch( startRegister(regEmail, regPassword1, regName) );
    }

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group mb-2">
                            <input 
                                type="text"
                                name="logEmail"
                                value={logEmail}
                                className="form-control"
                                placeholder="Correo"
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                name="logPassword"
                                value={logPassword}
                                className="form-control"
                                placeholder="Contraseña"
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="d-grid gap-2">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={handleRegister}>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name="regName"
                                value={regName}
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name="regEmail"
                                value={regEmail}
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña" 
                                name="regPassword1"
                                value={regPassword1}
                                onChange={handleRegisterInputChange}
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña" 
                                name="regPassword2"
                                value={regPassword2}
                                onChange={handleRegisterInputChange}
                            />
                        </div>

                        <div className="d-grid gap-2">
                            <input 
                                type="submit" 
                                className="btnSubmit reg-submit" 
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
