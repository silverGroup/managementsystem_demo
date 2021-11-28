export const useStorage = ($storage) => {
    /**
     * 根据key获取存在storage中的值
     * @param key
     */
    const get = (key) => {
        let value = $storage.getItem(key);
        try {
            value = JSON.parse(value);
            return value;
        }
        catch (error) {
            return value;
        }
    };
    /**
     * 根据 key值向storage中存储值
     * @param key storage key
     * @param value 需要存在storage
     */
    const set = (key, value) => {
        return $storage.setItem(key, value ? JSON.stringify(value) : value);
    };
    /**
     * 移除根据key移除的值
     * @param key
     */
    const remove = (key) => {
        return $storage.removeItem(key);
    };
    /**
     * 移除除了key之外的所有存储在storage中的值
     * @param key
     */
    const clearExcept = (key) => {
        for (let i = 0; i < $storage.length; i++) {
            const itemKey = $storage.key(i);
            if (itemKey && itemKey !== key) {
                $storage.removeItem(itemKey);
            }
        }
    };
    /**
     * 清空storage里面的值
     */
    const clearAll = () => {
        for (const itemKey in $storage) {
            if (itemKey)
                $storage.removeItem(itemKey);
        }
    };
    return {
        get,
        set,
        remove,
        clearExcept,
        clearAll,
    };
};
const SessionStorageService = useStorage(window.sessionStorage);
const LocalStorageService = useStorage(window.localStorage);
export { SessionStorageService, LocalStorageService };
//# sourceMappingURL=storage.js.map