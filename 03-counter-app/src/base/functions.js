
import teams from '../data/teams'

// Normal sin async ni await
export const GetTeamById = (id) => {

        return teams.find( (e) => e.id === id );
};

export const function_With_Async_Await = async() => {

        try {
                
                const link =  GetTeamById(1);
                if (link) {
                        console.log(link);
                        return link;
                }else {
                        return 'Do not exist'
                }


        }catch(err) {
                return 'Do not exist this object';
        }



}

