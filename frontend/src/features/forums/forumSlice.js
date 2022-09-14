import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    forums: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const forumSlice = createSlice ({
    name:
        'forum', 
        initialState,
        reducers: {
            reset: (state)=> initialState
        }
})

export const { reset } = forumSlice.actions
export default forumSlice.reducer