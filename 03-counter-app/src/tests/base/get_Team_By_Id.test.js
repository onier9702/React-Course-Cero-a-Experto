import '@testing-library/jest-dom';
import { function_With_Async_Await, GetTeamById } from '../../base/functions';


describe('test for get_Team_By_Id', () => { 
    
    test('it should returns the object team', () => { 
        
        // const id = 2;
        const result2 = {
            id: 2,
            name: 'Barcelona',
            country: 'Spain',
            league: 'La Liga'
        };
        const result = GetTeamById(2);
        console.log(result);
        //console.log(result.name);
        expect(result.name).toBe('Barcelona'); 
    }),

    test('it should returns the same but with promise inside async and await', async() => {

        const m = await function_With_Async_Await();
        // expect(m.includes('https://')).toBe(true); // this works with ID = 5 who contains htttps://
        // expect(typeof m).toBe('string');
        // expect(typeof m).toBe('object'); //
        
    });
});
