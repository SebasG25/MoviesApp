const API = 'https://api.themoviedb.org/3';

export function get(path) {
    return fetch(`${API}${path}`, {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZThhYjM1OGQ3ODA4ZTIwNzk5NzNmOTEwODkyMjUwNCIsInN1YiI6IjYyMjJhMzFmODc0MWM0MDAxYjJmZTMzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TAk1dLH9_1sNJF5A0PIlXsABlhxEpSddTd4VF4qgSsk',
            'Content-Type': 'application/json;charset=utf-8',
        },
    }).then(result => result.json());
}