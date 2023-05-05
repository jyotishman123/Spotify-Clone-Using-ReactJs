export const initialState = {
    spotifyDetails:null,
    user:null,
    token:null,
    myPlaylists:[],
    isPlaying:false,
    items:null,
    showFooter:false
     
}


const reducer = (state,action) =>{
        
    switch(action.type){
         
        case 'SET_TOKEN':{
            return{...state, token:action.payload}
        }
        
        case 'SET_SPOTIFY':{
            return{...state, spotifyDetails:action.payload}
        }

        case 'SET_PLAYLIST':{
            return{...state, myPlaylists:action.payload}
        }
        case 'SET_USER':{
            return{...state,user:action.payload}
        }
        case 'SET_ITEMS':{
            return{...state, items:action.payload}
        }
        case 'SET_PLAY':{
            return{...state, isPlaying:action.payload}
        }
        case 'SHOW_FOOTER':{
            return{...state, showFooter:true}
        }

        default:{
            return state
        }
    }
}

export default reducer