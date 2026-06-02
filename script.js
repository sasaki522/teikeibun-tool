const sceneGroups = [
  {
    category: '初回対応',
    scenes: [
      {
        id: 'registered',
        label: '登録直後',
        templates: {
          soft: `{{candidate}}\n\nご登録ありがとうございます！\nまずはご状況を整理しながら、無理のないペースで転職活動を進められればと思っています！\n\nご希望条件や今のお悩みを伺ったうえで、合いそうな求人を一緒に確認していきますね。\n「まだ転職するか迷っている」という段階でもまったく問題ありません！{{infoText}}`,
          standard: `{{candidate}}\n\nご登録ありがとうございます！\nこれからご希望やご経験を確認し、応募率が上がりやすい求人の選定からサポートします！\n\nまずは初回ヒアリングで、転職理由・希望条件・優先順位を整理しましょう。\n確認後、マッチ度の高い求人から順にご提案します！{{infoText}}`,
          closing: `{{candidate}}\n\nご登録ありがとうございます！\n良い求人は募集枠が埋まるのも早いため、まずは早めにご希望条件を整理して動ける状態を作りましょう！\n\n初回ヒアリングの日程を確定できれば、求人提案から応募までスムーズに進められます。\n本日中にご都合の良い時間を2〜3つお送りください！{{infoText}}`
        }
      },
      {
        id: 'hearingSchedule',
        label: 'ヒアリング日程調整',
        templates: {
          soft: `{{candidate}}\n\n初回ヒアリングの日程についてご相談です！\nご希望や今のお気持ちを伺いながら、無理のない進め方を一緒に整理できればと思っています。\n\nご都合の良い日時をいくつかいただけますでしょうか？\n短時間でも大丈夫ですので、話しやすいタイミングを教えてくださいね！{{infoText}}`,
          standard: `{{candidate}}\n\n初回ヒアリングの日程調整でご連絡しました！\n求人提案の精度を上げるため、希望条件・転職理由・今後の進め方を最初に整理できればと思います。\n\n直近でご都合の良い日時を2〜3つお送りください！\n確認でき次第、面談枠を調整します！{{infoText}}`,
          closing: `{{candidate}}\n\n初回ヒアリングの日程を先に押さえたく、ご連絡しました！\n希望条件の整理が早いほど、応募できる求人の選択肢を逃しにくくなります。\n\n本日中に候補日時を2〜3ついただければ、すぐに枠を確保します！\nまずは日程確定まで進めましょう！{{infoText}}`
        }
      },
      {
        id: 'meetingPreviousDay',
        label: '面談前日',
        templates: {
          soft: `{{candidate}}\n\n明日はご面談ですね！\n事前準備は完璧でなくて大丈夫ですので、今のお気持ちや不安なことをそのままお話しください。\n\n希望条件がまだ固まっていなくても、一緒に整理していければ問題ありません！\n明日はリラックスしてお話しできればと思います！{{infoText}}`,
          standard: `{{candidate}}\n\n明日のご面談についてリマインドです！\n当日は、これまでのご経験・転職理由・希望条件を中心に伺います。\n\n求人提案の精度を上げるため、譲れない条件と迷っている条件を分けておくとスムーズです！\nご不明点があれば事前にご連絡ください！{{infoText}}`,
          closing: `{{candidate}}\n\n明日の面談では、今後応募につなげるための条件整理まで進めたいです！\n事前に「希望職種」「希望年収」「転職時期」だけでも考えておいていただけると、求人提案がかなりスムーズになります。\n\n良い求人を逃さないためにも、明日一緒に方向性を固めましょう！{{infoText}}`
        }
      },
      {
        id: 'afterMeetingFollow',
        label: '面談後フォロー',
        templates: {
          soft: `{{candidate}}\n\n本日はお時間いただきありがとうございました！\nお話しいただいた内容をもとに、無理なく進められる求人や選考の進め方を整理しますね。\n\n面談後に追加で思い出した希望や不安があれば、いつでも送ってください！\n一緒に納得感のある転職活動にしていきましょう！{{infoText}}`,
          standard: `{{candidate}}\n\n本日はご面談ありがとうございました！\n伺ったご経験・希望条件・転職理由をもとに、応募率が上がりやすい求人を優先してご提案します。\n\n求人をご確認いただいたら、応募可否や気になる点を率直に教えてください！\n次のアクションまでしっかりサポートします！{{infoText}}`,
          closing: `{{candidate}}\n\n本日はありがとうございました！\n面談内容から見ると、早めに応募へ進めた方がチャンスを広げやすい求人がありそうです。\n\nご提案後、少しでも前向きな求人は早めに推薦まで進めましょう！\n選考枠が埋まる前に動けるよう、確認をお願いします！{{infoText}}`
        }
      }
    ]
  },
  {
    category: '応募',
    scenes: [
      {
        id: 'jobProposal',
        label: '求人提案',
        templates: {
          soft: `{{candidate}}\n\n{{companyPhrase}}の求人をご提案させてください！\nこれまで伺ったご希望と重なる部分があり、まずは内容を見ていただきたい求人です。\n\n気になる点があれば一緒に確認しますので、無理に応募を決めなくても大丈夫です！\n率直な印象を教えてくださいね！{{infoText}}`,
          standard: `{{candidate}}\n\n{{companyPhrase}}の求人をご提案します！\nご経験を活かしやすく、希望条件との親和性もあるため、応募候補として確認いただきたいです。\n\n仕事内容・条件・懸念点を見たうえで、応募可否を教えてください！\n前向きであれば推薦準備まで進めます！{{infoText}}`,
          closing: `{{candidate}}\n\n{{companyPhrase}}の求人は、今回のご希望に対してかなり相性が良い印象です！\n募集枠が動きやすいため、前向きであれば早めに応募へ進めたいです。\n\nまずは求人内容をご確認いただき、本日中に応募可否を教えてください！\nチャンスを逃さないよう進めましょう！{{infoText}}`
        }
      },
      {
        id: 'applicationIntent',
        label: '応募意思確認',
        templates: {
          soft: `{{candidate}}\n\n先日ご提案した{{companyPhrase}}の求人について、その後お気持ちはいかがでしょうか？\n少しでも気になる点があれば、応募前に一緒に整理できます。\n\n応募する・見送る、どちらでも大丈夫ですので、今の率直なお気持ちを教えてくださいね！{{infoText}}`,
          standard: `{{candidate}}\n\n{{companyPhrase}}への応募意思について確認です！\n求人内容をご覧いただき、応募に進めてもよろしいでしょうか？\n\n応募する場合は、推薦文を整えて企業様へお送りします。\n見送りの場合も、理由を教えていただければ次回提案の精度を上げます！{{infoText}}`,
          closing: `{{candidate}}\n\n{{companyPhrase}}の応募可否について、早めに確認させてください！\n条件面の合致度が高く、今動くことで面接につながる可能性を高められます。\n\n前向きであれば本日中に推薦まで進めたいです！\n応募OKかどうかだけ、まずお返事ください！{{infoText}}`
        }
      },
      {
        id: 'recommendationDone',
        label: '推薦完了',
        templates: {
          soft: `{{candidate}}\n\n{{companyPhrase}}への推薦が完了しました！\n結果が出るまで少しお時間をいただく場合がありますが、進捗が入り次第すぐにご連絡します。\n\n待っている間に不安な点が出てきたら、いつでもご相談くださいね！{{infoText}}`,
          standard: `{{candidate}}\n\n{{companyPhrase}}への推薦が完了しました！\n書類選考結果が分かり次第、すぐに共有します。\n\n通過した場合は面接日程調整に進むため、今のうちに面接可能な日時も少し整理しておいてください！{{infoText}}`,
          closing: `{{candidate}}\n\n{{companyPhrase}}への推薦が完了しました！\n通過後すぐに面接調整へ動けるかが、選考スピードに影響します。\n\n結果が出たら即対応できるよう、直近1〜2週間の面接可能日を事前に確認しておきましょう！{{infoText}}`
        }
      },
      {
        id: 'documentScreening',
        label: '書類選考中',
        templates: {
          soft: `{{candidate}}\n\n現在、{{companyPhrase}}にて書類選考中です！\n結果が出るまで少し落ち着かないかと思いますが、進捗が入り次第すぐにご連絡します。\n\n他に気になる求人があれば、並行して一緒に確認していきましょう！{{infoText}}`,
          standard: `{{candidate}}\n\n{{companyPhrase}}の書類選考は現在確認中です！\n結果が分かり次第すぐに共有します。\n\n選考を止めないためにも、結果待ちの間に次の候補求人や面接可能日時を整理しておくとスムーズです！{{infoText}}`,
          closing: `{{candidate}}\n\n{{companyPhrase}}の書類選考結果を待っている状況です！\n結果待ちだけで止まると機会損失になりやすいため、並行して次の選択肢も見ておきましょう。\n\n良い求人があればすぐ応募できるよう、引き続き前向きに進めていきます！{{infoText}}`
        }
      },
      {
        id: 'documentPassed',
        label: '書類通過',
        templates: {
          soft: `{{candidate}}\n\n嬉しいご連絡です！\n{{companyPhrase}}の書類選考が通過しました！おめでとうございます！\n\n次は面接になりますので、不安な点は一緒に確認しながら準備していきましょう。\nまずはご都合の良い日時を教えてくださいね！{{infoText}}`,
          standard: `{{candidate}}\n\n{{companyPhrase}}の書類選考が通過しました！\nおめでとうございます！\n\n次は面接日程の調整に進みます。\n面接参加率を高めるため、無理なく参加できる候補日時を2〜3つお送りください！{{infoText}}`,
          closing: `{{candidate}}\n\n{{companyPhrase}}の書類通過、おめでとうございます！\nここから面接枠の確保が重要です。良い時間帯は埋まりやすいため、早めに調整しましょう！\n\n本日中に候補日時を2〜3ついただければ、すぐ企業様へ提出します！{{infoText}}`
        }
      },
      {
        id: 'resultDelayFollow',
        label: '結果遅延フォロー',
        templates: {
          soft: `{{candidate}}\n\n{{companyPhrase}}の選考結果について、少しお時間をいただいております。\nお待たせしてしまい申し訳ありません。こちらからも状況確認を進めています。\n\n進捗が入り次第すぐにご連絡しますので、もう少々お待ちくださいね！{{infoText}}`,
          standard: `{{candidate}}\n\n{{companyPhrase}}の選考結果について、企業様へ確認中です。\n当初より少しお時間がかかっていますが、進捗が入り次第すぐに共有します。\n\n結果待ちの間も選択肢を狭めないよう、他求人も並行して確認していきましょう！{{infoText}}`,
          closing: `{{candidate}}\n\n{{companyPhrase}}の結果は現在確認中です！\n結果待ちで動きが止まると、他の良い求人を逃す可能性があります。\n\n進捗確認はこちらで進めますので、並行して応募候補を広げておきましょう！\n次の一手まで止めずに進めます！{{infoText}}`
        }
      }
    ]
  },
  {
    category: '面接',
    scenes: [
      {
        id: 'interviewSchedule',
        label: '面接日程調整',
        templates: {
          soft: `{{candidate}}\n\n{{companyPhrase}}の面接日程についてご相談です！\nご無理のない範囲で、参加しやすい日時をいくつか教えていただけますでしょうか？\n\n当日落ち着いて臨める時間帯で調整できればと思います。\n候補をいただければ、こちらで企業様へ確認しますね！{{infoText}}`,
          standard: `{{candidate}}\n\n{{companyPhrase}}の面接日程調整に進みます！\n直近1〜2週間で、面接可能な日時を2〜3つお送りください。\n\n面接参加率を高めるため、移動や準備時間に余裕のある候補をいただけると安心です！{{infoText}}`,
          closing: `{{candidate}}\n\n{{companyPhrase}}の面接枠を早めに押さえたいです！\n日程調整が遅れると、選考スピードや企業側の温度感に影響することがあります。\n\n本日中に候補日時を2〜3つお送りください！\nこちらですぐ企業様へ提出します！{{infoText}}`
        }
      },
      {
        id: 'interviewConfirmed',
        label: '面接確定',
        templates: {
          soft: `{{candidate}}\n\n{{companyPhrase}}の面接日程が確定しました！\n{{timingSentence}}\n\n当日は緊張されると思いますが、これまでのご経験を落ち着いてお話しできれば大丈夫です。\n持ち物や接続方法など、不安な点があれば事前に確認しましょう！{{infoText}}`,
          standard: `{{candidate}}\n\n{{companyPhrase}}の面接が確定しました！\n{{timingSentence}}\n\n当日までに、転職理由・志望理由・これまでの経験を整理しておきましょう。\n持ち物、開始時間、アクセスまたは接続方法も必ず確認をお願いします！{{infoText}}`,
          closing: `{{candidate}}\n\n{{companyPhrase}}の面接が確定しました！\n{{timingSentence}}\n\nここからの準備で通過率を上げられます。\n面接前に志望理由と自己PRを固め、当日は開始10分前には準備完了の状態にしましょう！{{infoText}}`
        }
      },
      {
        id: 'interviewThreeDaysBefore',
        label: '面接3日前',
        templates: {
          soft: `{{candidate}}\n\n{{companyPhrase}}の面接まであと3日ですね！\n少し緊張も出てくる頃かと思いますが、今から一緒に整理すれば大丈夫です。\n\n転職理由、志望理由、聞きたい質問を軽く見直しておきましょう。\n不安な部分があれば送ってくださいね！{{infoText}}`,
          standard: `{{candidate}}\n\n{{companyPhrase}}の面接3日前です！\n面接参加率と通過率を上げるため、準備内容を確認しておきましょう。\n\n特に、職務経歴の説明・転職理由・志望理由・逆質問は整理しておくと安心です！\n気になる点があれば事前に潰しましょう！{{infoText}}`,
          closing: `{{candidate}}\n\n{{companyPhrase}}の面接まであと3日です！\nここからの準備で印象はかなり変わります。\n\n今日中に転職理由と志望理由を一度確認し、不安な回答があれば送ってください！\n通過に向けて仕上げていきましょう！{{infoText}}`
        }
      },
      {
        id: 'interviewPreviousDay',
        label: '面接前日',
        templates: {
          soft: `{{candidate}}\n\n明日は{{companyPhrase}}の面接ですね！\n持ち物、開始時間、アクセスまたは接続方法を念のため確認しておきましょう。\n\n面接では完璧に話そうとしすぎず、ご自身の経験を落ち着いて伝えられれば大丈夫です！\n不安な点があれば、直前でもご連絡くださいね！{{infoText}}`,
          standard: `{{candidate}}\n\n明日は{{companyPhrase}}の面接です！\n持ち物・開始時間・場所またはURL・担当者名を必ず確認しておきましょう。\n\n心構えとしては、結論から話すこと、転職理由を前向きに伝えること、最後に入社意欲を示すことが大切です！\n明日は自信を持って臨んでください！{{infoText}}`,
          closing: `{{candidate}}\n\n明日は{{companyPhrase}}の面接です！\n通過率を上げるため、今夜のうちに持ち物・時間・アクセスを最終確認してください。\n\n面接では「なぜ応募したか」「入社後どう貢献できるか」を明確に伝えることが重要です！\n明日は開始10分前行動で、必ず参加できる状態にしましょう！{{infoText}}`
        }
      },
      {
        id: 'interviewMorning',
        label: '面接当日朝',
        templates: {
          soft: `{{candidate}}\n\n本日は{{companyPhrase}}の面接ですね！\n{{timingSentence}}\n\n緊張されると思いますが、これまで準備してきた内容を落ち着いて伝えられれば大丈夫です。\n遅刻しないよう少し早めに準備して、不安なことがあればすぐご連絡ください！応援しています！{{infoText}}`,
          standard: `{{candidate}}\n\n本日は{{companyPhrase}}の面接です！\n{{timingSentence}}\n\n対策を活かして、自信を持って臨んでください！\n開始時間に遅れないよう、移動・接続・持ち物は早めに確認しましょう。\nご不明点やトラブルがあればすぐご連絡ください！{{infoText}}`,
          closing: `{{candidate}}\n\n本日は{{companyPhrase}}の面接です！\n{{timingSentence}}\n\n今日は選考を前に進める大切なタイミングです。\n遅刻防止のため早めに準備し、面接では入社意欲と貢献できる点をしっかり伝えましょう！\n終わり次第、感想のご連絡をお願いします！{{infoText}}`
        }
      },
      {
        id: 'interviewThirtyMinutesBefore',
        label: '面接30分前',
        templates: {
          soft: `{{candidate}}\n\nまもなく{{companyPhrase}}の面接ですね！\nここからは深呼吸して、落ち着いて臨みましょう。\n\n開始時間、接続URLまたは場所、持ち物だけ最後に確認してください。\n不安な点があれば、今からでもご連絡くださいね！{{infoText}}`,
          standard: `{{candidate}}\n\n{{companyPhrase}}の面接30分前です！\n開始時間・接続環境・持ち物・担当者名を最終確認しましょう。\n\n話すときは結論から、経験は具体例を添えて、最後は前向きな意欲を伝える意識でいきましょう！\n応援しています！{{infoText}}`,
          closing: `{{candidate}}\n\n{{companyPhrase}}の面接直前です！\nここからは参加遅れがないよう、すぐ面接に入れる状態で待機してください。\n\n回答は長くなりすぎず、結論→理由→具体例で伝えましょう！\n通過に向けて、最後まで集中していきましょう！{{infoText}}`
        }
      },
      {
        id: 'interviewImmediatelyAfter',
        label: '面接直後',
        templates: {
          soft: `{{candidate}}\n\n{{companyPhrase}}の面接、本当にお疲れさまでした！\nまずは一息ついてくださいね。\n\n落ち着いたら、話しやすさ・仕事内容の印象・気になった点を簡単に教えてください。\n良かった点も不安な点も、一緒に整理していきましょう！{{infoText}}`,
          standard: `{{candidate}}\n\n{{companyPhrase}}の面接お疲れさまでした！\n企業様へのフォローに活かしたいので、面接直後の感想を共有ください。\n\n聞かれた質問、うまく話せた点、懸念に感じた点、志望度の変化を教えていただけると助かります！{{infoText}}`,
          closing: `{{candidate}}\n\n{{companyPhrase}}の面接お疲れさまでした！\n面接後の温度感は、次の選考や企業フォローに大きく関わります。\n\nできるだけ早めに、志望度・懸念点・面接で聞かれた内容を共有ください！\n通過に向けてこちらからもフォローします！{{infoText}}`
        }
      },
      {
        id: 'interviewWaitingResult',
        label: '面接結果待ち',
        templates: {
          soft: `{{candidate}}\n\n{{companyPhrase}}の面接結果については、現在確認中です！\n結果を待つ時間は落ち着かないと思いますが、進捗が入り次第すぐにご連絡します。\n\n不安なことがあれば、いつでもご相談くださいね！{{infoText}}`,
          standard: `{{candidate}}\n\n{{companyPhrase}}の面接結果は現在確認中です！\n企業様から連絡が入り次第、すぐに共有します。\n\n結果待ちの間も転職活動を止めないため、他の候補求人や次の選考準備も並行して進めましょう！{{infoText}}`,
          closing: `{{candidate}}\n\n{{companyPhrase}}の結果は確認中です！\nただ、結果待ちだけで止まると他の機会を逃す可能性があります。\n\n良い結果に備えつつ、次の候補も並行して動かしましょう！\n選択肢を広げることが内定獲得率アップにつながります！{{infoText}}`
        }
      },
      {
        id: 'finalInterviewBefore',
        label: '最終面接前',
        templates: {
          soft: `{{candidate}}\n\nいよいよ{{companyPhrase}}の最終面接ですね！\nここまで進まれたこと自体、しっかり評価されている証拠です。\n\n当日は、入社後に実現したいことや大切にしたい働き方を落ち着いて伝えましょう。\n不安な点は一緒に整理します！{{infoText}}`,
          standard: `{{candidate}}\n\n{{companyPhrase}}の最終面接前の確認です！\n最終面接では、スキルだけでなく入社意欲・価値観・長期的な活躍イメージが見られます。\n\n志望理由、入社後に貢献できること、他社状況を整理して臨みましょう！{{infoText}}`,
          closing: `{{candidate}}\n\n{{companyPhrase}}の最終面接は、内定獲得に向けた重要な場面です！\nここでは入社意欲を明確に伝えることが大切です。\n\n「なぜこの会社か」「入社後どう貢献するか」を具体的に伝え、内定につなげましょう！{{infoText}}`
        }
      },
      {
        id: 'finalInterviewAfter',
        label: '最終面接後',
        templates: {
          soft: `{{candidate}}\n\n{{companyPhrase}}の最終面接、本当にお疲れさまでした！\nここまで進めてこられたこと、まずはしっかりご自身を労ってくださいね。\n\n面接の印象や今のお気持ち、気になった点があれば教えてください。\n一緒に次の判断に向けて整理しましょう！{{infoText}}`,
          standard: `{{candidate}}\n\n{{companyPhrase}}の最終面接お疲れさまでした！\n結果確認と企業フォローに活かすため、面接内容と志望度を共有ください。\n\n入社したい気持ちが強まった点、懸念に感じた点、条件面で確認したい点を整理しましょう！{{infoText}}`,
          closing: `{{candidate}}\n\n{{companyPhrase}}の最終面接お疲れさまでした！\n内定判断に近いフェーズのため、面接後の志望度共有が非常に重要です。\n\n企業様へ前向きな温度感を伝えるためにも、できるだけ早めに感想と志望度を教えてください！{{infoText}}`
        }
      }
    ]
  },
  {
    category: '内定',
    scenes: [
      {
        id: 'offerFlash',
        label: '内定速報',
        templates: {
          soft: `{{candidate}}\n\n大変嬉しいご連絡です！\n{{companyPhrase}}より内定のご連絡がありました！本当におめでとうございます！\n\nここまで頑張ってこられた結果だと思います。\n詳細条件については確認のうえ、改めて分かりやすくご案内しますね！{{infoText}}`,
          standard: `{{candidate}}\n\n{{companyPhrase}}より内定のご連絡をいただきました！\n本当におめでとうございます！私もとても嬉しいです！\n\nまずは速報として共有します。\n給与・入社日・条件面などの詳細は、確認でき次第改めてご案内します！{{infoText}}`,
          closing: `{{candidate}}\n\n{{companyPhrase}}から内定が出ました！\n本当におめでとうございます！ここまでの準備がしっかり評価されています。\n\n詳細条件を確認したうえで、承諾に向けた不安点を早めに整理しましょう！\n良いご縁を逃さないよう、次の判断まで一緒に進めます！{{infoText}}`
        }
      },
      {
        id: 'offerDetail',
        label: '内定詳細説明',
        templates: {
          soft: `{{candidate}}\n\n{{companyPhrase}}の内定条件について、詳細を一緒に確認していきましょう！\n給与、入社日、働き方など、気になる点は遠慮なく聞いてください。\n\nすぐに結論を出さなくても大丈夫です。\n納得して判断できるよう、一つずつ整理しますね！{{infoText}}`,
          standard: `{{candidate}}\n\n{{companyPhrase}}の内定詳細についてご案内します！\n条件面、入社日、業務内容、懸念点を整理したうえで、承諾可否を判断していきましょう。\n\n不明点があれば企業様へ確認しますので、気になる点をまとめて送ってください！{{infoText}}`,
          closing: `{{candidate}}\n\n{{companyPhrase}}の内定条件を確認し、承諾判断に向けて整理しましょう！\n条件面で不安が残る場合は、早めに確認することで解消できる可能性があります。\n\n承諾期限もあるため、気になる点を本日中に洗い出して、判断できる状態にしていきましょう！{{infoText}}`
        }
      },
      {
        id: 'compareCompanies',
        label: '他社比較フォロー',
        templates: {
          soft: `{{candidate}}\n\n複数社で迷われるのは自然なことです！\n条件だけでなく、働き方・仕事内容・人間関係・将来のイメージも含めて一緒に整理しましょう。\n\n焦って決める必要はありません。\n後悔のない選択ができるよう、今感じている迷いをそのまま教えてくださいね！{{infoText}}`,
          standard: `{{candidate}}\n\n他社比較について整理しましょう！\n年収、仕事内容、働き方、成長環境、入社後の安心感を軸に比較すると判断しやすくなります。\n\nどの条件を最優先にしたいか、一緒に優先順位をつけていきましょう！{{infoText}}`,
          closing: `{{candidate}}\n\n他社比較は大切ですが、承諾期限や募集状況も踏まえて判断する必要があります。\n迷いが長引くと、良い条件を逃す可能性もあります。\n\n優先順位を明確にして、最も納得できる選択へ進めましょう！\n本日中に比較ポイントを一緒に整理したいです！{{infoText}}`
        }
      },
      {
        id: 'acceptanceDeadline',
        label: '承諾期限リマインド',
        templates: {
          soft: `{{candidate}}\n\n{{companyPhrase}}の内定承諾期限が近づいてきました。\nご不安や迷いがある場合は、無理に抱え込まず一緒に整理できればと思います。\n\n納得して判断できるよう、気になる点や確認したいことを教えてくださいね！{{infoText}}`,
          standard: `{{candidate}}\n\n{{companyPhrase}}の内定承諾期限についてリマインドです！\n期限までに判断できるよう、条件面・仕事内容・入社後イメージを整理しましょう。\n\n不明点があれば企業様へ確認しますので、懸念点を早めに共有ください！{{infoText}}`,
          closing: `{{candidate}}\n\n{{companyPhrase}}の内定承諾期限が近づいています！\n期限を過ぎると、内定条件や受け入れ枠が維持できない可能性があります。\n\n不安点はすぐ確認しますので、本日中に承諾可否の方向性を決めていきましょう！\n後悔のない判断に向けて最後までサポートします！{{infoText}}`
        }
      },
      {
        id: 'preventOfferDecline',
        label: '内定辞退阻止',
        templates: {
          soft: `{{candidate}}\n\n{{companyPhrase}}の内定辞退を考えられているとのことで承知しました。\n無理に引き止めたいわけではありませんが、辞退理由だけ一緒に整理できればと思います。\n\n不安が解消できる内容であれば、企業様へ確認できる可能性もあります。\n今のお気持ちを率直に教えてくださいね！{{infoText}}`,
          standard: `{{candidate}}\n\n{{companyPhrase}}の内定辞退について、最終判断前に一度理由を確認させてください。\n仕事内容、条件、人間関係、入社後イメージなど、どこに懸念があるか整理しましょう。\n\n解消できる不安であれば企業様へ確認します。\n納得したうえで判断できるようサポートします！{{infoText}}`,
          closing: `{{candidate}}\n\n{{companyPhrase}}の内定辞退連絡を入れる前に、一度だけ不安点を整理しましょう！\n辞退後は条件や枠を戻せない可能性があります。\n\n懸念が条件面や情報不足であれば、確認によって解消できる場合もあります。\n後悔を残さないため、本日中に最終確認させてください！{{infoText}}`
        }
      }
    ]
  },
  {
    category: '入社',
    scenes: [
      {
        id: 'joiningDocuments',
        label: '入社書類提出',
        templates: {
          soft: `{{candidate}}\n\n入社に向けた書類のご準備状況はいかがでしょうか？\n分からない項目や準備しづらいものがあれば、一緒に確認します。\n\n焦らなくて大丈夫ですが、提出期限に間に合うよう早めに進めていきましょう！{{infoText}}`,
          standard: `{{candidate}}\n\n入社書類の提出について確認です！\n入社手続きをスムーズに進めるため、提出物・記入内容・期限を確認しておきましょう。\n\n提出予定日が分かれば教えてください！\n不明点があればこちらでも確認します！{{infoText}}`,
          closing: `{{candidate}}\n\n入社書類の提出状況について確認です！\n書類提出が遅れると、入社手続きや初日の準備に影響する可能性があります。\n\n本日中に提出予定日、または不明点を共有ください！\n入社までスムーズに進めましょう！{{infoText}}`
        }
      },
      {
        id: 'joiningDateConfirmed',
        label: '入社日確定',
        templates: {
          soft: `{{candidate}}\n\n入社日が確定しました！\n新しいスタートが近づいてきましたね。期待と不安がどちらもある時期かと思います。\n\n初日を安心して迎えられるよう、持ち物や当日の流れも一緒に確認していきましょう！{{infoText}}`,
          standard: `{{candidate}}\n\n入社日が確定しました！\nここからは入社手続き、持ち物、初日の集合時間などを確認しながら準備していきます。\n\n不安点を残さず入社できるよう、気になることがあれば早めに共有ください！{{infoText}}`,
          closing: `{{candidate}}\n\n入社日が確定しました！\nここからは入社率を下げないためにも、手続きと不安解消を早めに進めることが大切です。\n\n初日までに必要事項をすべて確認し、安心してスタートできる状態にしましょう！{{infoText}}`
        }
      },
      {
        id: 'oneWeekBeforeJoining',
        label: '入社1週間前',
        templates: {
          soft: `{{candidate}}\n\n入社まであと1週間ですね！\nご準備やお気持ちはいかがでしょうか？\n\n新しい環境の前は不安が出るのも自然です。\n持ち物、初日の流れ、気になる点があれば一緒に確認しましょう！{{infoText}}`,
          standard: `{{candidate}}\n\n入社1週間前の確認です！\n持ち物、集合時間、提出書類、通勤経路などをそろそろ最終確認しておきましょう。\n\n不安や確認事項があれば、今週中に解消できるよう共有ください！{{infoText}}`,
          closing: `{{candidate}}\n\n入社まであと1週間です！\nここで準備不足や不安を残さないことが、入社後の定着にもつながります。\n\n持ち物・書類・初日の流れを本日中に確認し、不明点があればすぐ解消しましょう！{{infoText}}`
        }
      },
      {
        id: 'joiningPreviousDay',
        label: '入社前日',
        templates: {
          soft: `{{candidate}}\n\nいよいよ明日からご入社ですね！\nここまで本当にお疲れさまでした。\n\n明日は無理に完璧を目指さず、まずは元気に挨拶できれば大丈夫です！\n持ち物と集合時間だけ最後に確認して、今日はゆっくり休んでくださいね！{{infoText}}`,
          standard: `{{candidate}}\n\n明日は入社初日です！\n持ち物、集合時間、場所、担当者名、服装を最終確認しておきましょう。\n\n初日は第一印象が大切です。\n少し早めに到着できるよう準備して、安心してスタートしましょう！{{infoText}}`,
          closing: `{{candidate}}\n\n明日はいよいよ入社初日です！\n遅刻や忘れ物がないよう、持ち物・集合時間・場所を今夜必ず確認してください。\n\n初日は元気な挨拶と時間厳守が大切です！\n良いスタートを切れるよう、準備万全で臨みましょう！{{infoText}}`
        }
      },
      {
        id: 'joiningDay',
        label: '入社当日',
        templates: {
          soft: `{{candidate}}\n\n本日からご入社ですね！\n新しい環境で緊張もあると思いますが、まずは一日無事に終えられれば十分です。\n\n困ったことや気になることがあれば、落ち着いたタイミングでいつでもご連絡ください。\n応援しています！{{infoText}}`,
          standard: `{{candidate}}\n\n本日入社初日ですね！\nまずは時間に余裕を持って到着し、挨拶と基本的な確認を丁寧に進めていきましょう。\n\n初日の感想や気になった点は、落ち着いたタイミングで共有ください！\n新しいスタートを応援しています！{{infoText}}`,
          closing: `{{candidate}}\n\n本日から新しいスタートです！\n初日は時間厳守、明るい挨拶、分からないことを確認する姿勢が大切です。\n\n入社後の不安を早めに拾いたいので、初日が終わったら簡単にご状況を教えてください！{{infoText}}`
        }
      },
      {
        id: 'oneWeekAfterJoining',
        label: '入社1週間後',
        templates: {
          soft: `{{candidate}}\n\n入社から1週間が経ちましたね！\n少しずつ新しい環境に慣れてきた頃かと思いますが、ご状況はいかがでしょうか？\n\n良かった点も、少し気になっている点も、率直に教えてください。\n無理なく続けられるようサポートします！{{infoText}}`,
          standard: `{{candidate}}\n\n入社1週間後のフォローです！\n仕事内容、人間関係、勤務時間、教育体制など、入社前とのギャップがないか確認させてください。\n\n早めに違和感を把握できると対策しやすいので、率直な状況を教えてください！{{infoText}}`,
          closing: `{{candidate}}\n\n入社から1週間が経ちました！\n定着に向けて、このタイミングで不安や違和感を確認することが重要です。\n\n小さなことでも早めに共有いただければ対応しやすいです。\n今の状況を本日中に簡単に教えてください！{{infoText}}`
        }
      },
      {
        id: 'oneMonthAfterJoining',
        label: '入社1ヶ月後',
        templates: {
          soft: `{{candidate}}\n\n入社から1ヶ月が経ちましたね！\nお仕事や職場には少し慣れてきましたでしょうか？\n\n頑張りすぎていないかも含めて、今のご状況を聞かせてください。\n引き続き安心して働けるよう、必要があれば一緒に整理します！{{infoText}}`,
          standard: `{{candidate}}\n\n入社1ヶ月後のフォローです！\n業務内容、職場環境、働き方、今後の見通しについて、入社前とのギャップがないか確認したいです。\n\n定着に向けて気になる点があれば、早めに共有ください！{{infoText}}`,
          closing: `{{candidate}}\n\n入社から1ヶ月が経ちました！\n長く安心して働くために、このタイミングで不安や課題を整理しておくことが大切です。\n\n気になる点があれば放置せず、今のうちに確認しましょう！\nご状況を共有ください！{{infoText}}`
        }
      }
    ]
  },
  {
    category: '掘り起こし',
    scenes: [
      {
        id: 'reviveNoResponse',
        label: '音信不通掘り起こし',
        templates: {
          soft: `{{candidate}}\n\nお久しぶりです！\nその後のご状況はいかがでしょうか？\n\n転職活動を続けている、少しお休みしている、迷っているなど、どの状態でも大丈夫です。\n今のお気持ちだけでも教えていただけると嬉しいです！{{infoText}}`,
          standard: `{{candidate}}\n\nその後のご状況確認でご連絡しました！\n転職活動の進捗やご希望条件に変化があれば、改めて求人提案や進め方を調整できます。\n\n現在の状況を一言でも構いませんので教えてください！{{infoText}}`,
          closing: `{{candidate}}\n\nお久しぶりです！\n求人状況は日々変わっており、以前より条件に合う求人が出ている可能性があります。\n\n転職活動を再開するか迷っている段階でも大丈夫です。\nまずは今の状況だけ、本日中にお返事いただけますと幸いです！{{infoText}}`
        }
      },
      {
        id: 'motivationUp',
        label: 'モチベーションアップ',
        templates: {
          soft: `{{candidate}}\n\n転職活動は、思ったより気持ちの波が出やすいものです。\n少し疲れている時は、ペースを落としても大丈夫です！\n\n今できることを一つずつ整理して、無理なく前に進めていきましょう。\n不安な気持ちもそのまま共有してくださいね！{{infoText}}`,
          standard: `{{candidate}}\n\n転職活動は継続することが大切です！\n応募、面接、結果待ちの中で気持ちが上下するのは自然なことです。\n\n今の状況を整理し、次にやることを一つに絞ると動きやすくなります。\n一緒に次のアクションを決めましょう！{{infoText}}`,
          closing: `{{candidate}}\n\nここで少し踏ん張ることで、選択肢を広げられる可能性があります！\n転職活動は止めてしまうと再開にエネルギーが必要になります。\n\nまずは次の1アクションだけ決めましょう！\n応募する求人、確認する条件、日程調整のどれから進めるか一緒に決めます！{{infoText}}`
        }
      },
      {
        id: 'congratulation',
        label: 'お祝い連絡',
        templates: {
          soft: `{{candidate}}\n\nこのたびは本当におめでとうございます！\nこれまで頑張ってこられた結果が形になり、私もとても嬉しいです。\n\n新しい環境でも、ご自身らしく少しずつ慣れていければ大丈夫です！\nこれからのご活躍を心より応援しています！{{infoText}}`,
          standard: `{{candidate}}\n\n改めて、本当におめでとうございます！\n転職活動を最後まで進められたこと、そして良いご縁につながったことを嬉しく思います。\n\n新しい環境でのスタートも応援しています！\n何かあれば入社後も遠慮なくご相談ください！{{infoText}}`,
          closing: `{{candidate}}\n\n本当におめでとうございます！\n今回の結果は、準備と行動を積み重ねてこられた成果です。\n\nここからが新しいスタートです。\n入社後も良い立ち上がりができるよう、必要な確認や不安解消は引き続きサポートします！{{infoText}}`
        }
      }
    ]
  }
];

const toneSettings = {
  soft: { label: '柔らかめ' },
  standard: { label: '標準' },
  closing: { label: 'クロージング強め' }
};

const scenes = sceneGroups.flatMap((group) => group.scenes.map((scene) => ({ ...scene, category: group.category })));

const candidateNameInput = document.getElementById('candidateName');
const companyNameInput = document.getElementById('companyName');
const additionalInfoInput = document.getElementById('additionalInfo');
const sceneButtons = document.getElementById('sceneButtons');
const messageOutput = document.getElementById('messageOutput');
const copyButton = document.getElementById('copyButton');
const resetButton = document.getElementById('resetButton');
const copyStatus = document.getElementById('copyStatus');
const selectedScene = document.getElementById('selectedScene');
let currentScene = null;

function addHonorific(value) {
  return value ? `${value.replace(/様$/, '')}様` : '';
}

function formatTime(timeText) {
  const normalized = timeText.replace('：', ':').replace(/から$/, '').trim();
  const colonTime = normalized.match(/^(午前|午後)?\s*(\d{1,2}):(\d{2})$/);

  if (colonTime) {
    const period = colonTime[1] || '';
    const hour = colonTime[2];
    const minute = colonTime[3] === '00' ? '' : `${Number(colonTime[3])}分`;
    return `${period}${hour}時${minute}`;
  }

  return normalized;
}

function extractInterviewTiming(rawInfo) {
  if (!rawInfo) {
    return '';
  }

  const dateMatch = rawInfo.match(/(本日|今日|明日|明後日|\d{1,2}月\d{1,2}日|\d{1,2}[/-]\d{1,2})/);
  const timeMatch = rawInfo.match(/(午前|午後)?\s*\d{1,2}(?::|：)\d{2}|(午前|午後)?\s*\d{1,2}時(?:\d{1,2}分)?/);

  if (!timeMatch) {
    return '';
  }

  const dateText = dateMatch ? dateMatch[0].replace('今日', '本日') : '本日';
  const timeText = formatTime(timeMatch[0]);

  return `${dateText}、${timeText}から`;
}

function getSelectedTone() {
  return document.querySelector('input[name="messageTone"]:checked')?.value || 'standard';
}

function getFormValues() {
  const rawCandidate = candidateNameInput.value.trim();
  const rawCompany = companyNameInput.value.trim();
  const rawInfo = additionalInfoInput.value.trim();
  const companyDisplay = addHonorific(rawCompany);
  const interviewTiming = extractInterviewTiming(rawInfo);

  return {
    candidate: addHonorific(rawCandidate) || '求職者様',
    companyDisplay,
    companyPhrase: companyDisplay || '企業様',
    interviewTiming,
    timingSentence: interviewTiming ? `${interviewTiming}の予定です！` : '面接日時も改めてご確認ください！',
    infoText: rawInfo ? `\n\n【補足】\n${rawInfo}` : ''
  };
}

function renderTemplate(template, values) {
  return template
    .replaceAll('{{candidate}}', values.candidate)
    .replaceAll('{{companyPhrase}}', values.companyPhrase)
    .replaceAll('{{timingSentence}}', values.timingSentence)
    .replaceAll('{{infoText}}', values.infoText);
}

function buildMessage(scene, values, toneKey) {
  return renderTemplate(scene.templates[toneKey] || scene.templates.standard, values);
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
  currentScene = scene;
  const toneKey = getSelectedTone();
  const message = buildMessage(scene, getFormValues(), toneKey);
  messageOutput.value = message;
  selectedScene.textContent = `選択中：${scene.category} / ${scene.label} / ${toneSettings[toneKey].label}`;
  setActiveButton(scene.id);
  clearCopyStatus();
}

function renderSceneButtons() {
  const fragment = document.createDocumentFragment();

  sceneGroups.forEach((group) => {
    const groupElement = document.createElement('section');
    groupElement.className = 'scene-group';

    const heading = document.createElement('h3');
    heading.textContent = `【${group.category}】`;
    groupElement.appendChild(heading);

    const buttons = document.createElement('div');
    buttons.className = 'scene-buttons';

    group.scenes.forEach((scene) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'scene-button';
      button.dataset.sceneId = scene.id;
      button.textContent = scene.label;
      button.addEventListener('click', () => generateMessage({ ...scene, category: group.category }));
      buttons.appendChild(button);
    });

    groupElement.appendChild(buttons);
    fragment.appendChild(groupElement);
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
  currentScene = null;
  document.querySelector('input[name="messageTone"][value="standard"]').checked = true;
  setActiveButton('');
  clearCopyStatus();
  candidateNameInput.focus();
}

renderSceneButtons();
document.querySelectorAll('input[name="messageTone"]').forEach((input) => {
  input.addEventListener('change', () => {
    if (currentScene) {
      generateMessage(currentScene);
    }
  });
});
copyButton.addEventListener('click', copyMessage);
resetButton.addEventListener('click', resetAll);
