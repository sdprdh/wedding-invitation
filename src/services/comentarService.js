export const ComentarService = {
    getALLComentar: async () => {
        const url = 'https://script.google.com/macros/s/AKfycbw-09bm6VDxTIh7s2T2vjgMMmr1ZmTiR3Zkoo9UmqHhV9PlaRh2SOWr3IhoTPGvSbcH/exec';

        try {
            const response = await fetch(url);
            return await response.json();
        } catch (error) {
            return {error: error && error.message};
        }
    },

    postDataComentar: async ({id, name, status,  comment, date, color}) => {
        const url = 'https://script.google.com/macros/s/AKfycbw-09bm6VDxTIh7s2T2vjgMMmr1ZmTiR3Zkoo9UmqHhV9PlaRh2SOWr3IhoTPGvSbcH/exec?action=insert';

        const object = {
            id: id,
            name: name,
            status: status,
            comment: comment,
            date: date,
            color: color,
            action: 'insert'
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(object),
            });

            return await response.json();

        } catch (error) {
            console.error('Post error:', error);
            return {error: error.message};
        }
    },

};