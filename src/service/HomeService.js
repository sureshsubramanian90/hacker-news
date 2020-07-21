import LocalStorage from '../helpers/LocalStorage';

export const arregateHomeData = (data, upVoteId) => {
    let hideItems = LocalStorage.getData('hideData');
    hideItems = hideItems ? JSON.parse(hideItems) : [];
    let upVoteItems = LocalStorage.getData('upVoteData');
    upVoteItems = upVoteItems ? JSON.parse(upVoteItems) : {};
    if (data && data.hits) {
        data.graph = [];
        for (let i = 0; i <= data.hits.length - 1 ; i++) {
            if (hideItems && hideItems.indexOf(data.hits[i].objectID) != -1) {
                data.hits[i].hide = true;
            }
            if (upVoteItems[data.hits[i].objectID] && !upVoteId) {
                data.hits[i].points += upVoteItems[data.hits[i].objectID];
            } else if (upVoteId && (upVoteId === data.hits[i].objectID)) {
                data.hits[i].points += 1;
            }
            data.graph.push({
                x: i,
                y: data.hits[i].points || 1,
            })
        }
    }
    return data;
}