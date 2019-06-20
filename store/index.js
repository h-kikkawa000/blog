
// ストア定義
export const state = () => ({
    title: '',
    tags:[],
    kubun:''
})

export const mutations = {
    setTitle(state,_title){
      state.title = _title;
    },
    setTags(state,_tags){
        state.tags = _tags;
    },
    setKubun(state,_kubun){
        state.kubun = _kubun;
    }, 
}

export const actions = {
    writeTitle(context, value) {
      // コミットすることで状態変更が反映される
      context.commit('setTitle', value)
    },
    writeTags(context, value) {
        // コミットすることで状態変更が反映される
        context.commit('setTags', value)
    },
    writeKubun(context, value) {
        // コミットすることで状態変更が反映される
        context.commit('setKubun', value)
      }
  }