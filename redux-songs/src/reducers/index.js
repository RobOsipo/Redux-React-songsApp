import { combineReducers } from 'redux'


const songsReducer = () => {
    return [
        { title: 'Who let the dogs out',duration: '3:30' },
        { title: 'No scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '2:30' },
        { title: 'All Star', duration: '3:15' }
    ]
}


const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECETED') return action.payload;

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})



