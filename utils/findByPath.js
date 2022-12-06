function pasrePath(path) {
    return path.split('/');
}

function findByPath(array, indexPath, path) {
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (item.path === path[indexPath]) {
            // Match

            if (indexPath === path.length - 1) {
                return item;
            }
            if (item.children) {
                return find(item.children, indexPath + 1, path);
            }
            return null;
        }
    }
    return null;
}

export default findByPath;
