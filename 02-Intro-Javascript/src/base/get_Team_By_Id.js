
import teams from '../data/teams'

// Normal sin async ni await
export const getTeamById = (id) => {

        return teams.find( (e) => e.id === id );
}