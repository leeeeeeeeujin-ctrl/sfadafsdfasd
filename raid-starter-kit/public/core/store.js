// 로컬 스토리지 관리
export const Store = (() => {
  const LS = {
    clientId: 'RSK_CLIENT_ID',
    name: 'RSK_NAME',
    roster: 'RSK_ROSTER',
    apiKeys: 'RSK_API_KEYS',
    apiSecrets: 'RSK_API_SECRETS',
    prompts: 'RSK_PROMPTS',
    myPromptId: 'RSK_MY_PROMPT_ID',
  };

  const state = {
    clientId: localStorage.getItem(LS.clientId) || (() => {
      const id = 'c-' + (crypto.randomUUID?.() || Date.now());
      localStorage.setItem(LS.clientId, id);
      return id;
    })(),
    name: localStorage.getItem(LS.name) || 'Player',
    roster: loadJSON(LS.roster, []),
    apiKeys: loadJSON(LS.apiKeys, []),
    spectators: [],
  };

  function loadJSON(key, defaultValue) {
    try {
      return JSON.parse(localStorage.getItem(key) || '');
    } catch {
      return defaultValue;
    }
  }

  function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // 이름 설정
  function setName(value) {
    state.name = value || 'Player';
    localStorage.setItem(LS.name, state.name);
  }

  // 캐릭터 관리
  function addChar(character) {
    const list = [...state.roster, character];
    state.roster = list;
    save(LS.roster, list);
  }

  function removeChar(id) {
    state.roster = state.roster.filter(x => x.id !== id);
    save(LS.roster, state.roster);
  }

  // API 키 관리
  function addApiKey(label, keyPlain) {
    const id = crypto.randomUUID?.() || ('k-' + Date.now());
    const last4 = keyPlain.slice(-4);
    const masked = keyPlain.length > 8 ? 
      keyPlain.slice(0, 4) + '…' + last4 : 
      '••••' + last4;
    
    const item = { id, label, keyMasked: masked, last4 };
    const list = [...state.apiKeys, item];
    state.apiKeys = list;
    save(LS.apiKeys, list);
    
    const secrets = loadJSON(LS.apiSecrets, {});
    secrets[id] = keyPlain;
    save(LS.apiSecrets, secrets);
    
    return item;
  }

  function removeApiKey(id) {
    state.apiKeys = state.apiKeys.filter(k => k.id !== id);
    save(LS.apiKeys, state.apiKeys);
    
    const secrets = loadJSON(LS.apiSecrets, {});
    delete secrets[id];
    save(LS.apiSecrets, secrets);
  }

  function getApiSecret(id) {
    const secrets = loadJSON(LS.apiSecrets, {});
    return secrets[id] || '';
  }

  // 프롬프트 관리
  function loadPrompts() {
    return loadJSON(LS.prompts, []);
  }

  function savePrompts(list) {
    save(LS.prompts, list);
  }

  return {
    LS,
    state,
    setName,
    addChar,
    removeChar,
    addApiKey,
    removeApiKey,
    getApiSecret,
    loadPrompts,
    savePrompts
  };
})();
