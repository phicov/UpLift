import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    forums: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Create new forum

export const createForum = createAsyncThunk('forums/create', async (goalData, thunkAPI) => {
    try{
        const token = thunkAPI.getState().auth.user.token
        return await forumService.createForum(forumData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

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