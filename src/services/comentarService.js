export const comentarService = {
    url: 'https://script.google.com/macros/s/AKfycbw20dzmJFBhCGIOMJXuKadQa9HQkABtLK47t-SWU9JMLeR25NiU5vF1Dxk0I3k_HmSZCQ/exec',

    getComentar: async function () {
        try {
            const response = await fetch(this.url);
            return await response.json();
        } catch (error) {
            return {error: error && error.message};
        }
    },

    addComentar: async function ({id, name, status, message, date, color}) {
        const comentar = {
            id: id,
            name: name,
            status: status,
            message: message,
            date: date,
            color: color,
        };

        try {
            const response = await fetch(this.url, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(comentar),
            });

            return await response.json();

        } catch (error) {
            console.error('Post error:', error);
            return {error: error.message};
        }
    },
};