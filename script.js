const scenes = [
  {
    id: 'preFollow',
    label: '面接前フォロー',
    build: ({ candidate, companyText, infoText }) => `${candidate}\n\nお疲れさまです。面接に向けて、準備の進み具合はいかがでしょうか？\n${companyText ? `${companyText}の面接` : '今回の面接'}では、これまでのご経験や転職理由を自然にお話しいただければ大丈夫です。\n不安な点や確認したいことがあれば、直前でも遠慮なくご連絡くださいね。${infoText}`
  },
  {
    id: 'preReminder',
    label: '面接前リマインド',
    build: ({ candidate, companyText, infoText }) => `${candidate}\n\n明日以降の面接について、念のためリマインドです。\n${companyText ? `${companyText}の面接` : '今回の面接'}では、落ち着いて普段通りお話しいただければ大丈夫です。\n開始時間の少し前にはご準備いただき、接続方法や持ち物もあわせてご確認ください。\n応援しています！${infoText}`
  },
  {
    id: 'postFollow',
    label: '面接後フォロー',
    build: ({ candidate, companyText, infoText }) => `${candidate}\n\n面接お疲れさまでした。\n${companyText ? `${companyText}との面接` : '本日の面接'}について、率直なご感想はいかがでしたでしょうか？\n話しやすさ、仕事内容への印象、気になった点など、簡単で構いませんので教えてください。\n今後のサポートに活かしますね。${infoText}`
  },
  {
    id: 'passed',
    label: '面接通過連絡',
    build: ({ candidate, companyText, infoText }) => `${candidate}\n\n嬉しいご連絡です！\n${companyText ? `${companyText}の選考` : '今回の選考'}について、面接通過の連絡がありました。おめでとうございます！\nこれまでのご経験やお人柄がしっかり伝わった結果だと思います。\n次のステップについても一緒に準備していきましょう。${infoText}`
  },
  {
    id: 'offer',
    label: '内定連絡',
    build: ({ candidate, companyText, infoText }) => `${candidate}\n\n大変嬉しいご連絡です。\n${companyText ? `${companyText}より` : '企業様より'}内定のご連絡をいただきました。おめでとうございます！\nこれまで丁寧に準備を進めてこられた成果だと思います。\n条件面や入社後のイメージについて、一緒に確認しながら進めていきましょう。${infoText}`
  },
  {
    id: 'closing',
    label: '内定承諾クロージング',
    build: ({ candidate, companyText, infoText }) => `${candidate}\n\n内定承諾について、改めてお気持ちはいかがでしょうか？\n${companyText ? `${companyText}は` : '今回の企業様は'}、これまで伺っていたご希望とも重なる部分が多く、前向きに検討いただけるご縁だと感じています。\nもちろん無理に決める必要はありませんが、不安な点を整理したうえで納得感を持って進められるようサポートします。\n気になることがあれば一緒に確認しましょう。${infoText}`
  },
  {
    id: 'schedule',
    label: '日程調整',
    build: ({ candidate, companyText, infoText }) => `${candidate}\n\n${companyText ? `${companyText}との面接` : '面接'}日程の調整についてご連絡です。\nご都合のよい日時をいくつかいただけますでしょうか？\n可能であれば、直近1週間ほどで複数候補をいただけますと調整がスムーズです。\n確認でき次第、企業様へお伝えしますね。${infoText}`
  },
  {
    id: 'documents',
    label: '書類提出催促',
    build: ({ candidate, companyText, infoText }) => `${candidate}\n\n応募書類について確認のご連絡です。\n${companyText ? `${companyText}への提出に向けて、` : ''}ご準備状況はいかがでしょうか？\nお忙しいところ恐れ入りますが、提出できそうなタイミングを教えていただけますと助かります。\n作成中で迷う部分があれば、こちらでも確認しますのでお気軽に送ってくださいね。${infoText}`
  },
  {
    id: 'beforeJoin',
    label: '入社前フォロー',
    build: ({ candidate, companyText, infoText }) => `${candidate}\n\n入社日が近づいてきましたね。ご準備はいかがでしょうか？\n${companyText ? `${companyText}での新しいスタート` : '新しい職場でのスタート'}に向けて、期待と少しの不安がある時期かと思います。\n確認したいことや気になる点があれば、入社前でも遠慮なくご連絡ください。\n安心して初日を迎えられるようサポートします。${infoText}`
  },
  {
    id: 'declineCheck',
    label: '辞退確認',
    build: ({ candidate, companyText, infoText }) => `${candidate}\n\n${companyText ? `${companyText}の選考` : '今回の選考'}について、辞退をご希望とのことで承知しました。\n念のため、最終的なお気持ちにお変わりがないか確認させてください。\n辞退理由も簡単で構いませんので共有いただけますと、企業様への連絡や今後のご提案に活かします。\n無理に引き止める意図ではありませんので、ご安心くださいね。${infoText}`
  },
  {
    id: 'anxietyCare',
    label: '不安解消フォロー',
    build: ({ candidate, companyText, infoText }) => `${candidate}\n\nご状況について共有いただきありがとうございます。\n転職活動では、不安や迷いが出てくるのは自然なことです。\n${companyText ? `${companyText}について` : '今回の件について'}気になっている点を一つずつ整理しながら、納得して進められるよう一緒に確認しましょう。\n急いで結論を出さなくて大丈夫ですので、今感じていることをそのまま教えてくださいね。${infoText}`
  }
];

const candidateNameInput = document.getElementById('candidateName');
const companyNameInput = document.getElementById('companyName');
const additionalInfoInput = document.getElementById('additionalInfo');
const sceneButtons = document.getElementById('sceneButtons');
const messageOutput = document.getElementById('messageOutput');
const copyButton = document.getElementById('copyButton');
const resetButton = document.getElementById('resetButton');
const copyStatus = document.getElementById('copyStatus');
const selectedScene = document.getElementById('selectedScene');

function getFormValues() {
  const rawCandidate = candidateNameInput.value.trim();
  const rawCompany = companyNameInput.value.trim();
  const rawInfo = additionalInfoInput.value.trim();

  return {
    candidate: rawCandidate ? `${rawCandidate.replace(/様$/, '')}様` : '求職者様',
    companyText: rawCompany,
    infoText: rawInfo ? `\n\n【補足】\n${rawInfo}` : ''
  };
}

function clearCopyStatus() {
  copyStatus.textContent = '';
}

function setActiveButton(sceneId) {
  document.querySelectorAll('.scene-button').forEach((button) => {
    button.classList.toggle('active', button.dataset.sceneId === sceneId);
  });
}

function generateMessage(scene) {
  const message = scene.build(getFormValues());
  messageOutput.value = message;
  selectedScene.textContent = `選択中：${scene.label}`;
  setActiveButton(scene.id);
  clearCopyStatus();
}

function renderSceneButtons() {
  const fragment = document.createDocumentFragment();

  scenes.forEach((scene) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'scene-button';
    button.dataset.sceneId = scene.id;
    button.textContent = scene.label;
    button.addEventListener('click', () => generateMessage(scene));
    fragment.appendChild(button);
  });

  sceneButtons.appendChild(fragment);
}

async function copyMessage() {
  const text = messageOutput.value.trim();

  if (!text) {
    copyStatus.textContent = 'コピーする文面がありません。';
    return;
  }

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(messageOutput.value);
    } else {
      messageOutput.select();
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
    }
    copyStatus.textContent = 'コピーしました';
  } catch (error) {
    copyStatus.textContent = 'コピーできませんでした。文面を選択してコピーしてください。';
  }
}

function resetAll() {
  candidateNameInput.value = '';
  companyNameInput.value = '';
  additionalInfoInput.value = '';
  messageOutput.value = '';
  selectedScene.textContent = 'シーン未選択';
  setActiveButton('');
  clearCopyStatus();
  candidateNameInput.focus();
}

renderSceneButtons();
copyButton.addEventListener('click', copyMessage);
resetButton.addEventListener('click', resetAll);
