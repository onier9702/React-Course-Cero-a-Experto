import { authReducer } from "../components/auth/AuthReducer"
import { types } from "../components/types/types";

describe('testing the authReducer', () => { 

    test('should return the state by default', () => { 

        
        const state = authReducer({logged:false}, { });

        expect(state).toEqual({logged:false});

     })
     test('should authenticate and put the name of user', () => { 

        const action = {
            type: types.login,
            payload: {
                name: 'Pedro',
            }
        }

        const state = authReducer( {},action );

        expect(state).toEqual({logged:true, name: 'Pedro'});
        
    })
    test('should erase the username and put logged false', () => { 

        const action = {
            type: types.logout,
        }
        const state = authReducer({logged:true,name:'Pedro'},action);

        expect(state).toEqual( {
            logged: false,
        } )
    })
 })