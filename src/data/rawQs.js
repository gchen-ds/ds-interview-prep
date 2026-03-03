const rawQs = {
  "6": [
    {
      "q": "年底找朋友内推了的，年初约上了第一轮店面。有一轮实验设计大家，主页多一个filter叫“work from home\", 用户可以点这个filter找出更work remote的listing。success metric就是booking/visits。. Χ\n\n. From 1point 3acres bbs\n之后面试官会当场发你两个CSV files.\n..\nDataset 1: Booking - columns: id_visitor, id_booking, timestamp\nDataset 2: Visit - columns: id_visitor, timestamp, country, assign (1 or 0)  \n..\n让你做一个join，再算个p value，整体不难。最后再画一个plot，任何形式都可以。",
      "a": "",
      "co": "Airbnb",
      "pos": "DS Inference",
      "freq": ""
    },
    {
      "q": "为什么要跳槽\n为什么airbnb\n介绍一下最近的工作经验，分析，建模，causal哪个做的比较多\npython sql的熟练程度\n描述一下最有impact的项目\n举一个例子在工作里如何体现了你的inclusiveness\n\n流程问题：location，是否需要sponsor\n\n介绍了面试，\n\n1. HM\n2. 48hours takehome\n2. onsite： sql，experimentation， pres on take home and past project(q&a), 2 rounds culture fit interview",
      "a": "",
      "co": "Airbnb",
      "pos": "DS Analytics",
      "freq": ""
    },
    {
      "q": "onsite一共5轮（如果过了后面还有2轮core value interview），感觉内容设计得还算合理，不会让人觉得流程特别长，或者想抱怨“为什么要考这种玩意”。\n\n\n1. experience interview：一个简短的BQ + 一个有各种followup的case。BQ围绕一个之前的project展开，如何和stakeholder沟通等等。case分好几part，主要讲思路，不需要特别深入地描述method。一开始是挺典型的experiment，后面涉及到用分析prioritize projects，从causal的角度分析如何投入资源等等。case挺有意思，感觉真的像是工作中会碰到的问题，所以也没有唯一的正确答案，自圆其说即可。\n2. presentation：recruiter在约时间前就会发interview prep材料，其中会有presentation的题目。我拿到",
      "a": "",
      "co": "Airbnb",
      "pos": "DS Analytics",
      "freq": ""
    }
  ],
  "8": [
    {
      "q": "发个最近面的onsite，职位是在inference下的，感觉非常注重causal inference，\n据说他们家DS最近改革，没有analytics track了，DS下面现在就是inference和algo\n然后他们说感觉现在ds更独立一些，不需要dedicated support一个product area？听起来更自由一些？有没有了解的小伙伴来说一说. ----\n\n整体experience一般，面试官一水PhD，搞得我觉得像去PhD答辩\n所有人都不是特别热情比较passive （可能我不是他们的top candidate的原因）\n整体感觉非常的academia，HM竟然是之前什么学校的tenure track professor跑来，也是很离奇了.\n\n第一面experimentation\nshare screen，python处理数据，分析一个实验结果，要画图support分析结",
      "a": "",
      "co": "Airbnb",
      "pos": "DS Inference",
      "freq": ""
    },
    {
      "q": "在线评估。两个问题。用于数据科学角色。测试 11。\n第一个问题，sql with group 和 join and order。第二个问题，MAXPATHSUM 用于具有两个特定起点的网格。你有 90 分钟",
      "a": "sql很简单。他们提供了两个数据表。那么您应该加入它们，对列进行分组，排序并包括零计数",
      "co": "Airbnb",
      "pos": "MLE",
      "freq": ""
    },
    {
      "q": "60 min，一个ds面试官\nRecruiter会给一些tips，介绍这轮考什么\n1. technical part: 几道非常简单的sql，加一道R/Python（找中位数）.1point3acres\n2. case study\n  (1) How do you measure the success of customer service product?\nFirst clarified whether it's a new feature released that needs to be measured or generally measure customer service product line. Then I gave some metrics.\n  (2) How would you improve representation’s platform?\nList a ",
      "a": "关于tech screen product的一些想法想跟大家交流一下，轻拍\n  (1) How do you measure the success of customer service product?\nproduct 自己本身的goal 就是帮助host 或者 customer解决问题，business goal 有了好的customer service，对user experience，更多的booking/revenue会有帮助。metrics：# tickets created per user per day or week， # of tickets solved / # of",
      "co": "Airbnb",
      "pos": "DS Analytics",
      "freq": ""
    },
    {
      "q": "2道SQL（how many US bookings per day, how many US listings got booked within 30days of creation).\n1道python（算median）\n3道case (怎么measure customer service team的progress；如果tickets涨了10%怎么investigate；如果我们在某个region launch了一个change，然后看到那个region的requests/user降了5%，要不要global launch）\n\n\n. check 1point3acres for more.\n小哥全程无比quiet，我说什么他都说cool,good，完全无followup\n开场没有自我介绍，也没让我自我介绍\n然后提前20分钟就结束提问了。。也太tm奇怪了。。。\n最后我问他不喜欢air",
      "a": "",
      "co": "Airbnb",
      "pos": "DS Analytics",
      "freq": ""
    },
    {
      "q": "Table 1 - Bookings\ndate, reservation id, listing id\n. ----\nTable 2 - Listing. Waral dи,\nuser id, listing id, listing created time, country\n\nQuestion 1: write query to show total reservation in US by date\n\nQuestion 2: write query to find the first-time booking for each listing in US\nQuestion 3: calculate week over week difference for first-time booking in US",
      "a": "",
      "co": "Airbnb",
      "pos": "BA",
      "freq": ""
    },
    {
      "q": "美国官网海投的北京DA岗位，第一轮是跟HR面，简单介绍了下岗位和问了些简历上的内容。.1point3acres\n第二轮是SQL面，用的是HackerRank，可以随时run，但是没有expected resul table，30分钟三道题，时间还是比较紧张的，时间管理非常重要！！楼主就是挂在时间没管理好。有时候虽然结果对了，但是多了不需要的column也会说你答案错误（比如某些calculated field），我就是因为这个问题在第一题上拖了比较久的时间，导致最后没做完。 个人建议，如果时间紧迫而且确认自己结果没问题，不必纠结系统给的对和错。第三题没时间做完，跟面试官说了一下自己的思路，但是感觉凉凉了。面试官总体感觉都是比较礼貌，也很守时 点赞！\n记得一部分原题，希望有用 （三题table一样的）\nTable bookings:\n-ds        .1point3acres\n-id_",
      "a": "",
      "co": "Airbnb",
      "pos": "BA",
      "freq": ""
    },
    {
      "q": "1. SQL\n\n给了一个 booking 和 listing属性 (country之类的) 的表格，要求SQL可以run\n\n- US每天booking的数量\n- 每天的listing的第一个booking, count by date\n- 每天的listing的第一个booking, count by date 每周的变化\n.\n\n2. Product\n\n问题是现在有一个新program 目标是improve user customer service experience\n\n- 有什么metrics来测量user customer experience\n- customer service ticket变高了，有什么可能的原因\n- 如果要减少tickets, 怎么知道减少多少才够",
      "a": "Select C.count(id_listing) from\n(select A.*, B.first_date\nfrom bookings as A\nleft join\n(select id_listing, min(date) as first_date from bookings\ngroup by id_listing) as B\non A.id_listing=B.id_listing) as C.\nwhere date != first_date\ngroup by date;\n-baidu 1point3acres\n####assuming the derived table fr",
      "co": "Airbnb",
      "pos": "DS Analytics",
      "freq": ""
    },
    {
      "q": "Airbnb家发的tech测试题，第一道是case，第二道是SQL。这里造福大家，就简单粗暴的把题目贴上来吧。求米~\nTable介绍。原table在hr共享的Excel里，columns就是很常规的那些。.1point3acres\nusers: this table contains information about ALL Airbnb users. ----\nlistings: listings refer to the properties available on Airbnb.\nreservations: each line represents a different reservation made on Airbnb..google  и\nreviews: this table contains information about the reviews that hav",
      "a": "",
      "co": "Airbnb",
      "pos": "BA",
      "freq": ""
    },
    {
      "q": "Airbnb is a two sided marketplace which matches guests to hosts. The booking flow at Airbnb is as follows: a guest finds an available room (listing) that they like, and then they contact the host. Once the guest finds a listing they are interested in, there are three ways to send the host an inquiry: ‘contact_me’, ‘book_it’, or ‘instant_book’ (detailed at the bottom of this document). Upon receivi",
      "a": "",
      "co": "Airbnb",
      "pos": "DS Analytics",
      "freq": ""
    },
    {
      "q": "周五下午准时收到题目，给了4天，但recruiter说其实8小时就能做完。后来做了下觉得只要把思路准备好了，8小时确实能做完，coding不难，我花了很多时间想present形式。\n\n我面的是analytics track。一道题目，很多数据，比如request reply book time stamp其他characteristics， 然后要identify key metrics，目的是improve booking rate/matching process，然后要提各种business recommendation。具体题目我就不方便说的太详细了，但是我拿到题目当晚找了做ML的DS聊思路，第二天就按照那个思路把数据都analyze了，晚上出去吃饭，偶遇朋友及朋友的朋友（一个product manager），又聊了一下，发现PM的思路完全和ML的思路不同，不过按照我做consul",
      "a": "",
      "co": "Airbnb",
      "pos": "DS Analytics",
      "freq": ""
    },
    {
      "q": "昂赛- ..\n我去昂赛之前，他们网站上中国组的坑就被拿下来了，不知道什么情况。\n1- presentation，在一个有沙发的会议室。 按要求，先自我介绍，然后讲个过去的相关的project ，再把作业再讲一遍。 来听presentation的人不是之前review作业的人，所以内容应该可以改动建议昂赛之前再好好考虑一下自己的metric们，多想想细节。 我就是没有想很多细节，也纠结很久要不要改动之前的slides。 过程中发现有些ppt有错的地方，尴尬。 全程很interactive，三个人来面，一个HM 两个DS。 过程说是会被录像。。. ----\n. 1point 3acres\n2- 接下来来到1-1 小屋。先和partner国人大哥聊天，大哥人很和善。 了解了一下过去的工作经历，聊了一下他们这个组的日常。然后问我觉得自己的经历和他们有什么交集不。\n然后是国人小哥吃饭，全程中文，也很",
      "a": "",
      "co": "Airbnb",
      "pos": "DS Analytics",
      "freq": ""
    },
    {
      "q": "nference 分为两部分，第一部分是一个experiment，要求guest写长message，看这个event对于airbnb booking有什么显著影响。第二部分是想看host回复时间，然后根据这个设计一个实验。反馈是对于实验设计，要完整叙述sizing design 然后如何分析。analytics比较宽泛，给了一个地方的booking data，比如request reply book time stamp其他characteristics， 然后问举例说有哪些key metrics，然后要提各种business recommendation，增加这个地方的booking。反馈是要突出data cleaning和business sense。",
      "a": "",
      "co": "Airbnb",
      "pos": "DS Analytics",
      "freq": ""
    }
  ],
  "13": [
    {
      "q": "去年12月面的airbnb 电话面。题目是LeetCode 341。\n要求1: 要能在iterate的过程中删除元素。比如调用一次next，再调用一次delete应该把第一个元素从原来的数据结构中删掉。但并不是每次next都会跟着一个delete操作。\n要求2: 不使用额外空间。",
      "a": "",
      "co": "Airbnb",
      "pos": "MLE",
      "freq": ""
    },
    {
      "q": "店面：具体题目不记得了，work scheduler，地里的面经有见过，有点像LC meeting rooms, 用minHeap做 LeetCode 1557\n\nVO:\nML experience:\n这一轮就是project deep dive, 既考察technical depth 又考察behavior，准备一个project, 详细讨论从头到尾怎么做的，多少人怎么分工，challenge，impact，trade-off, timeline 等等\n\nMLSD1:\nAirbnb has a list of problematic listings surfaced by user complaints, e.g., low quality, poor safety, fraudulent. They are already removed but their owners keep ",
      "a": "",
      "co": "Airbnb",
      "pos": "MLE",
      "freq": ""
    },
    {
      "q": "题目是很标准的implement queque with limited size。地里很多帖子都提到。\n开始讨论的时候，我一步一步按照想法(比如linked list, circular linked list, double linked list）等等思路介绍过去。\n感觉面试官要求的是要最优解法。所以开始花了一部分时间讨论应该用什么方法。",
      "a": "",
      "co": "Airbnb",
      "pos": "MLE",
      "freq": ""
    },
    {
      "q": "技术面都是常规题：店面：外星人字典\nVO 4轮技术：\n算法题：滑动拼图（凄凄伞）leetcode 773\n经验：聊简历\n机器学习1: 价格预测系统\n机器学习2: 推荐和排序系统\n\n感受最差的可能就是2轮公司文化面试中的一轮。\n问题比如：\n你为什么选择我们公司？\n除了专业，还有什么可以激发你强烈兴趣？\n无论我的回答是什么，面试官没有反应也没有任何表情变化，感觉对方很累的样子。\n\n整体感受：一般。大多面试官不是很热情，基本就是没啥表情。技术面试不是最难，但是有感觉对方机器学习水平在大厂中不是最强的（可能只是我的两个面试官）。",
      "a": "",
      "co": "Airbnb",
      "pos": "MLE",
      "freq": ""
    },
    {
      "q": "刷题网leetcode 1235类似，用dp做了，需要compile，最后de完bug跑完一个test。\nHR给feedback说给solution太快没有first principle...需要加面",
      "a": "",
      "co": "Airbnb",
      "pos": "MLE",
      "freq": ""
    },
    {
      "q": "第一轮： 国人小姐姐，先让写一个函数check Palindrome， 然后写 Palindrome Pairs 那题。test全过，但是说code不够干净，于是几天后第二轮\n第二轮：国人小哥哥，人挺nice，上来就说直接写题不然来不及。 那道联通kingdom的题目。之前看到但是没写，主要是题意不是很理解。虽然知道DFS肯定能解，但是光弄清楚分数怎么算花了挺久。虽然最后test也全过了，但是估计这么磕绊挂也在情理之中。",
      "a": "",
      "co": "Airbnb",
      "pos": "MLE",
      "freq": ""
    },
    {
      "q": "店面：menu order ， 就是target sum变形\n昂塞4轮\n1. practical ml:设计搜索 如何排序\n2. k stop flight\n3. experience\n4. 一个袋子里有R个红色糖果W个白色糖果，每次取一个糖果，如果取到红色就吃掉，取到白色就放回袋里，但如果下一次再取到白色那就吃掉。求袋里最后剩下一个糖果为红色的机率。dp在家想过，不大确定状态转移方程，我当时觉得a家肯定注重正确性，万一错了万劫不复，于是临机一动，临时写了个monte carlo simulation 要求输出95%confidence level 的 range\n\n果然要求加面coding:\n2轮culture : 主要准备点做公益的例子就可以应付了\n1轮coding: user preference ,用topological sort即可。",
      "a": "",
      "co": "Airbnb",
      "pos": "MLE",
      "freq": ""
    },
    {
      "q": "第一题是一个dfs 的题目，类似于找tree 的第几层的node 有啥第二题是 分析 二分复杂度\n第三题是 分析 一个tensor 的shape是多少",
      "a": "",
      "co": "Netflix",
      "pos": "ML Intern",
      "freq": ""
    }
  ],
  "14": [
    {
      "q": "年底找朋友内推了的，年初约上了第一轮店面。有一轮实验设计大家，主页多一个filter叫“work from home\", 用户可以点这个filter找出更work remote的listing。success metric就是booking/visits。. Χ\n\n. From 1point 3acres bbs\n之后面试官会当场发你两个CSV files.\n..\nDataset 1: Booking - columns: id_visitor, id_booking, timestamp\nDataset 2: Visit - columns: id_visitor, timestamp, country, assign (1 or 0)  \n..\n让你做一个join，再算个p value，整体不难。最后再画一个plot，任何形式都可以。",
      "a": "",
      "co": "Airbnb",
      "pos": "DS Inference",
      "freq": ""
    }
  ],
  "23": [
    {
      "q": "what brings you to airbnb?/why airbnb?\n·       what can you teach your co-workers after you getin?\n·       describe a person whom you admire most.\n·       describe your experience with Airbnb\n·       where have you been to?\n·       what will you do if you win a lottery such asPowerball?\n·       what is the biggest fear in your life?\n·       how do describe Airbnb to a people back to 2003?\n·       ",
      "a": "",
      "co": "Airbnb",
      "pos": "DS Analytics",
      "freq": ""
    },
    {
      "q": "给了一个take home challenge, 48小时内交上去。要求交你的code和一份20分钟内能理解的summary。跟recruiter联系好时间然后在定好的时候发给你。工具语言不限，说明不要写自己的名字和任何identifying information。看到这条感觉不错，匿名改卷，是个meritocratic的地方。\n\n题目给了数据，要求做AB testing experiment result analysis, 和predictive model。感觉没什么捷径，就是多练习，多感觉数据分析。结果太好的时候要多提问题。Quora上有很多好的资源。predictive model也不需要做的太深，因为时间限制摆在哪。我主要抓住做visualization和解释我为什么要这么做，这个结果有什么意义，公司怎么使用。",
      "a": "",
      "co": "Airbnb",
      "pos": "DS Inference",
      "freq": ""
    },
    {
      "q": "客人可以在A家申请主人的家住，但主人可以拒绝。A家想增加客人申请到住家的概率，所以做一个实验要求被抽中的人写一段至少140字的话去描述为何想住在选中的主人的家。50%的人在实验组，50%的人在控制组。问：A家应不应该将此实验推广到全部客人的申请上。 能不能提一些建议来衡量未来应不应该要求全部申请者都写一段至少140字的话。要求至少要有一个数据可视化。还要求指出真实数据与任务文档中对数据描述有差异的地方。\n\n关键变量有： 申请人id, 主人id, 申请人申请时的绝对时间， 主人过了多久才接受。\n. From 1point 3acres bbs\n楼主无在业界呆过，不知道这就是A/B testing，一开始就想用logit regression去estimate要求写140字对被主人家接受的概率有无显著影响，然后发现控制组里的人也有写任意长度的描述，发现行不通。后来网上找了一下才知道这是假设检验",
      "a": "",
      "co": "Airbnb",
      "pos": "DS Inference",
      "freq": ""
    },
    {
      "q": "大概是一个predict booking rate的，lz用的最简单的logistic regression，因为interpretability。第二题和第三题是个A/B test的问题，问你有一个新的规定要不要announce，目标要提高number of bookings。然后让你设计怎么sample，衡量什么指标，how long should you run your experience，等等。。",
      "a": "",
      "co": "Airbnb",
      "pos": "DS Inference",
      "freq": ""
    },
    {
      "q": "2. TPS1: 第一轮店面是个澳洲PhD小哥，主要集中在：\nCore statistical foundation questions\nAdvanced topics in randomized experiments or observational studies（二选一）\n我选择了实验，整个一小时基于一个case问实验细节相关问题，问得非常细，包括并不限于：定义metrics /  network effect / multivariate testing / hte / sutva / ...\n【面完过两个小时通知过了约第二轮店面】\n. ----\n        3. TPS2: 这轮是中国PhD小姐姐（夸一句人超好，一直在引导我）：.\nCase：与第一轮相似，包括定metrics 设计实验等\nCoding：两道SQL（medium难度）+ 一道Python算法题，easy难度,",
      "a": "想请问一下如果在工作中不怎么接触到causal inference的话，是怎么准备这些面试题的呀？我看了很多Netflix自己的tech blog，了解他们平常用什么方法解决什么问题，然后再针对性地学习, 请问楼主怎么准备的实验面试部分？ 主要看面经和问ChatGPT，gpt在这方面还是很好用的",
      "co": "Netflix",
      "pos": "L4 DS",
      "freq": ""
    }
  ],
  "24": [
    {
      "q": "第二个是technical screening 面试官是senior ds，面试内容围绕1）sql 考了window function，python 都是data manipulation. ----\n2）ab test ；\n3）metrics;  ab test：launch新feature你怎么设计实验，在abtest里需要注意什么，如果结果🈶问题怎么debug etc. Waral dи,\nmetrics：ab test里你会用什么metrics；如何和xfn partner align metrics definition etc",
      "a": "",
      "co": "Spotify",
      "pos": "DS",
      "freq": ""
    },
    {
      "q": "tech 面60min，说会有python，sql， 和关于ab testing stats & modeling 的问题。\n\n\nsql 就是地里的题目，也是常规题目（我司面试也有类似题，问的问题和我面别人一样 哈哈）。 给了两张表， 表1， user_id, test_group, first_exposed_time. 表2：dt， stream time， platform。 问题是：在某一platform上测试一个ranking feature，goal 是提高streaming time， 有下面的data， 怎么evaluate。答：可以看一下average streaming time， 但还是要做ab testing 看是不是statisical significant。 sql需要注意的是要用left join keep all user in test groups。 ",
      "a": "",
      "co": "Spotify",
      "pos": "DS",
      "freq": ""
    },
    {
      "q": "第一轮life story：简单聊聊个人经历，为什么选他们家，职业目标。\n\n第二轮pair programming：地里出现过的CTR，主要看对dictionary的熟练度. 1）找 bug； 计算里面有个错误的variable，只有一个bug。格式就是原来只有一个product，现在有多个。 2）根据要求改格式；3）用unit test测试\n\n第三轮 三场on site: 1）technical deep dive: 讲讲自己的项目；2）sql: 普通group by, partition by; 3) case study：如何设计metrics，设计ml，设计AB test。",
      "a": "",
      "co": "Spotify",
      "pos": "DS",
      "freq": ""
    },
    {
      "q": "5.1号 hr reach out但是说下一周他pto，我们约了5.9号 聊了半小时，基本就是问问你的background，相关的项目，对他家的了解，motivation什么的\n- 5.16号 tech面，45mins，一个超级nice的中国小哥。面试前领英搜他的时候发现我们是connection，后来面完发了个thank you note。本来说要考sql， python和stats，但是结果就考了sql和python。sql就是地里原题，给两个table，streaming table和ab test table，先问有什么insight，然后说他们改变了playlist的歌曲排列的algorithm，\n想要test这个变化，问怎么定义metric。然后写sql query求metrics （avg streaming time）。这两个table其实有点tricky的地方，记得ab ",
      "a": "不是的，show group的user本身就是可以选择要不要stream，你不能因为他们不听，就把他们排出，这样就是selection bias，你就成了compare show group里听音乐的人跟control听音乐的人，这叫compliance bias。这些show group 听音乐的人很可能是忠实用户，见到新的feature就马上使用，control那些听音乐的人可能就是随便听听。这样你的比较群就不对了。\n但是我也有一样的问题，那就是群主为什么用了subquery， 而不是一个case when 或者sum（）就直接ignore null value啊？",
      "co": "Spotify",
      "pos": "DS Music Partnership",
      "freq": ""
    },
    {
      "q": "Tech Screen: 都是地里老题，numpy/pandas，stream SQL, A/B test, 没有leetcode。SQL有两个follow up, 都是基础题，CTE/Window function都不用写。面完第二天就说next step了。跟recruiter 约了onsite之前的call，反馈说不错，但是他们家好像挺看工作年限的，DS需要3年经验，associate DS要求就低一些，不过也要看面试表现。recruiter表示股票计算比较复杂onsite前就share了一个slide讲股票的。\n.1point3acres\nTakehome: 是一个playlist相关的数据，问题比较open end，有general的问题也有组specific的问题， 要做好还是有点花时间的\n. Waral dи,\nOnsite: 一轮director面，一轮DS，一轮PM，一轮",
      "a": "",
      "co": "Spotify",
      "pos": "DS",
      "freq": ""
    },
    {
      "q": "1. 地里老题Python/R 就是给一个data file， 考manipulation。要求创建一个新的column， 把desktop的stream time改变，其他数值要求保证不变。.\n注意code是需要编译并且能run出正确结果的， 面试官会检查结果是否正确。所以如果有什么typo，bug都需要能够当场修正\n\n2. SQL题\n也是地里的， 两个table， 一个有userid和abtest bucket， 另一个是user behavior data。. http://1point3acres.com/\n1）用这些data能回答哪些， open question。感觉主要考你是否有相关经验. 1point 3 acres\n2）写出query来看不同group的avg stream time， 以及怎么和product manager解释（t test）3）追问了 如果计算出两个",
      "a": "",
      "co": "Spotify",
      "pos": "DS",
      "freq": ""
    },
    {
      "q": "round 1: HM - there is also HM discussion in phone screening round. This round is to have more discussion with HM. Main goal is to make sure that both sides are aligned of this positions. And the HM will access further your past experience.\nround 2: take home challenge presentation. A take home challenge takes ~7-10 hours based on HR. 这个presentation主要考核你把数据变成insights并且present给stakeholders的能力。audie",
      "a": "",
      "co": "Spotify",
      "pos": "DS",
      "freq": ""
    },
    {
      "q": "Python:.google  и\n1) 算desktop的total stream\njust use np.where to specifiy the condition\n2) 新创一个column, 把desktop stream减半 .\nsame method, using np.where\n3) 把第二题写成function\n\n根据不同platform减少stream次数 e.g desktop 减半, tablet 减少 30% 以此类推\ndef function_name(platform, reduce, df) <-- 用这三个parameter\n一样用np.where; SQL:\n给了ab_bucket 跟 streams 两个table.\n1) 用这两个table能回答什么问题\n2) 计算control 跟 variant 的 average stream time -",
      "a": "",
      "co": "Spotify",
      "pos": "Associate Data Analyst",
      "freq": ""
    },
    {
      "q": "这个HR问了我超级多问题。从AB test经验到modeling经验还有团队合作的经验。感觉我们的对话像个快问快答，满满地说了半个小时。但他并没有特别深入地问。感觉就是有个list of questions给他问的感觉。语速极快，像药物广告说到副作用那种语速...\n\nTech screen：\n四大块，Python，SQ L，AB test和linear regression. 1point 3 acres\nPython是个column manipulation的题，SQL是User table和stream table。好像Spotify这两题都特别标准。\n我SQL有小错，但是interviewer很chill，说不重要。\n\nAB test和modeling的问题重点都是怎么跟non tech audience解释。解释group means解释p value这种。",
      "a": "",
      "co": "Spotify",
      "pos": "DS",
      "freq": ""
    },
    {
      "q": "Python的部分就是用numpy和pandas\n1. 如何create一个新的column，fill column with conditional values (use np.where).\n2. 如何把让第一题里面的conditions flexible to changes (写一个function，然后np.vectorize)\n3. 一个很random的follow up，我有点没听懂（欧洲公司口音都令人伤心），大概是如何让上面那个function更flexible，于是我用了dictionary\n\nSQL的部分就是我挂的部分... 也怪lz自己没好好再多刷刷题了，建议各位面试前一天还是多写写SQL练练手感\n这道题就是地里之前的题，有两个表，一个是ab_buckets，ab_buckets里面有user_id, ab_buckets, first_expose_date。一个",
      "a": "",
      "co": "Spotify",
      "pos": "DS",
      "freq": ""
    },
    {
      "q": "一共三轮面试。第一轮和HR打电话，然后是两轮背靠背的phone interview, 第一个和HM聊经历，第二个和team member tech screen. spotify的 tech screen 挺简单的，一道python(任何会写if elif的人都会过很简单）, 一道sql也比较简单，最后一个问题记得是开放性的，给你几个columns, 问你可以想出用这些看什么insights, 想几个use case就行，没有标准答案。\n\n一直到onsite都很顺利。tech screen 后一天 recruiter很快发邮件约onsite, 然后发了一个data challenge一个礼拜时间做. onsite 的时候一轮就是做data challenge presentation。然后一轮business case, 还有一轮tech case, 剩下就是和HM, stakeholde",
      "a": "",
      "co": "Spotify",
      "pos": "DS",
      "freq": ""
    },
    {
      "q": "eng manager 两轮：\n- how to prioritize competing engr requests (one team wants you to do this, the other wants that, etc)\n- walk me thru your resume. deep dive on 1st bullet point.\n- Reddit 要推出一个AI chat box（功能和search重叠）。如何设计a/b test。会有哪些impacts，要看哪些metrics。. 1point 3 acres\n- 在这个chat box launch之后，公司要在chat里放广告（我面的是ads组），如何设计a/b test。这里有个budget split的概念。\n-baidu 1point3acres\nDS HM 一轮：\n我们round 1就聊过，互相感觉不错",
      "a": "假设control有一个ad slot，treatment有两个。treatment花钱的速度一定比control要快。假设简单a/b test的结果是treatment的ads revenue多了30%，结论就是treatment可以increase monetization by 30%吗？答案是30%应该是inflated estimate，因为treatment抢了control的budget。\n\n最好的solution是budget split capability http://link.1point3acres.com/?url=https%3A%2F%2Fwww.linkedi",
      "co": "Reddit",
      "pos": "Sr. DS Ads",
      "freq": ""
    },
    {
      "q": "一轮电面是直接跟hiring manager聊的 ..\n职位是senior DS 偏产品类，大部分都是一些general BQ\n最开始是面试官介绍自己跟组里的情况 很详细-baidu 1point3acres\n然后让我介绍自己\n\ntell me about your background? why you want this position?. 1point3acres\n. Χ\ndo you prefer analytics or modeling track?\n\nwhat motivates you to find a new job?\n\ntell me an a/b test experimention you did? how did you decide sample size?\n\ntell me a time you compromise to your stakeholder",
      "a": "",
      "co": "Reddit",
      "pos": "Sr. Product DS",
      "freq": ""
    },
    {
      "q": "现在市场上竞争还是比较激烈，特别是一些senior的岗位。不仅要会，还要擅长（做的又对又快，还要优化的结果），你写的每一步code，对方还是会问你原因，为什么你做A 而不是B.\n竞争对手都很强。有的公司是和他们的bar比，有的是和其他的candidate比较。大家加油。\n\n除了attachment的4道sql题目。\n还被问到了，最喜欢的产品是什么，how to define the success of the product, what metrics would you use to measure, how would you prioritize those metrics. AB testing related questions.\n\n总共1个小时，被问到的问题还是不少的。好好准备吧，同志们。不要忘了给大米哦。=）. Waral dи,\nCodewriting\n\n\n\n\nInstr",
      "a": "",
      "co": "Reddit",
      "pos": "Sr. DS",
      "freq": ""
    },
    {
      "q": "onsite一共四轮，\n第一轮是Product manager，大概问了问以前的project，着重强调了AB Testing里的bias问题和是否需要做follow up的test\n第二轮是隔壁组的analyst测试SQL\n有一个Event table，大概记录了每一个user的event和timestamp，. http://1point3acres.com/\nQ1: CVR，windows function + Case When就可以\nQ2: 求出本月CVR最高的人，每一天的登录次数\nQ3: 有点trick，是求每一天的CVR和一周之前CVR的关系，比如这周一的CVR是5%，上周一的CVR是3%，5%/3%等于1.666第三轮是Hire Manager，闲聊为主，她是语言学专业的，但是我觉得人家不是很喜欢我。。。\n中间一轮是吃饭，伙食一般，尬聊了30分钟\n第四轮是老大，case是有",
      "a": "",
      "co": "Reddit",
      "pos": "Sr. DA Ads",
      "freq": ""
    },
    {
      "q": "HM: 问了很多ab testing的问题 非常详细: 答得很不好 一开始节奏就乱了... 还问了一些ml问题 (logistic assumption;",
      "a": "",
      "co": "Expedia",
      "pos": "DS Product Analytics",
      "freq": ""
    },
    {
      "q": "第一轮：一个Business Intelligence Analyst，内容是做一个Case Study, 面试之前提供了数据，要求是根据提供的数据进行分析并给出一些意见，在面试的时候present，大概15min左右。\nPresent结束后根据你的内容问一下问题，然后是一些behaviour question, 问一些你曾经的project经历以及中间遇到的问题。\n\n第二轮：DSA的Director. 第一轮说的我口干舌燥，后面这个感觉精力被榨干，所以回答的没第一轮好。\n主要问了一个和travel coupon有关的问题，问你怎么收集数据，然后怎么根据数据设计实验，AB Test什么的，然后怎么test你的实验结果。.1point3acres\n然后又追加了一些Behavior Question. .",
      "a": "",
      "co": "Expedia",
      "pos": "DSA",
      "freq": ""
    },
    {
      "q": "一轮, 和HM1小时, 白人女性, 比较nice\n\n最骄傲的经历, 说了一个automation节约了多少FTE的的经历. follow up实现的逻辑, 涉及到的数据, 多少个人在使用我这个automation, 我这个automation在业务里会不会出现某某问题, 出现了问题怎么解决\n用Data创造价值的经历, 说了一个machine learning的经历. 问有没有deployment, 有什么business impact. HM没理解我这个项目, follow up了很多细节.\n给表名和列名, 在ZOOM的聊天窗口里写SQL, 用了window function, 印象中非常简单\nQ&A环节, 楼主提了过多的问题HM没耐心了强行结束了这个环节...\n\n\n二轮, Loop, 共四小轮\n印度女性面试官, 考A/B Testing, 给你看Expedia官网搜索关键词之后的酒店排名",
      "a": "",
      "co": "Expedia",
      "pos": "DS",
      "freq": ""
    },
    {
      "q": "sql: 1.count customer type, brand name 2022/01\n做的过程中面试人问了Left join /inner join的区别\n2.bookingamount every month and previous month\n\n输入类似：. 1point3acres\njan 100 NA NA\nfeb 150 jan 100; statistics: 1.explain p value\n2.90% confidence means?\n3.ab test 如何选group",
      "a": "",
      "co": "Expedia",
      "pos": "DS",
      "freq": ""
    },
    {
      "q": "网上海投后HR联系, hiring mgr店面面筋已发. 店面一周后收到在线表演邀请. VO总共4轮, 3个同组的sr/lead MLE和一个stakeholder组的sr DS. Coding和西桐射击都是在hackerrank内进行. 目前还在等结果, 发面筋攒人品求加米!\nVO1 - Sr DS (Stakeholder, Case, 30mins)\nIntro; BQs; 简历项目细节; Mini-case - 模型里有一个关于单个账户下各种观看设备时长的feature. 讨论用每种设备时长占比% vs 实际raw小时数的优缺点. 由此发散讨论granularity, data structure/table schema design, 还有某类设备数据从某时间节点后不再存在的影响. 面试官晚了一些并且case相关表格现做所以实际用时超过了30分钟, 我也就基本没有什么Q&A的时",
      "a": "",
      "co": "Disney",
      "pos": "Sr. MLE",
      "freq": ""
    }
  ],
  "27": [
    {
      "q": "Onsite\n签了NDA，考题不说太具体，说些tips和感受吧。另外，Recruiter会给个pdf，介绍每一轮具体考什么。\n1. Experience Interview (45 minutes): HM 会先介绍下自己的team，然后就让你讲讲一个项目，这个项目不要和后面presentation的项目重复了，因为HM大概率会参加presentation。HM会问得很详细，为什么要做xxx，为什么不做xxx，把business logic和data insights挖得很细。这轮的特点是如果项目选太简单了的话，没什么好讲的；选复杂了的话，解释domain knowledge就要花很多功夫。注意表达要清晰有条理，不要太啰嗦，但要把逻辑讲明白。我的HM特别注重business impact，特别是money value，你说了engagement metrics (DAU/MAU之类的）没用",
      "a": "",
      "co": "Airbnb",
      "pos": "DS Analytics",
      "freq": ""
    },
    {
      "q": "通过一个线上系统下载prompt和data，需要在72小时内提交。说是expect会花4-6小时（所以4-6小时是DS类take home challenge约定俗成的通识了么？）\n题目是通过一个search result (click, book等用户行为) 的dataset，来做一个ranking / recommender system的model。-baidu 1point3acres\n无奈楼主第一次做ranking model，花了好长时间学习ranking model的逻辑和evaluation metric。\n最后交了一个巨长的iPython notebook。",
      "a": "",
      "co": "Airbnb",
      "pos": "DS Algo",
      "freq": ""
    },
    {
      "q": "Take home 是一个data challenge让你分析怎么matching supply and demand to grow bookings\n没有什么需要建模的，基本上问你想看哪些metrics，画图分析",
      "a": "",
      "co": "Airbnb",
      "pos": "DS Analytics",
      "freq": ""
    },
    {
      "q": "空气床面经不多, 分享一下经验, 7月的onsite\n\nPresentation环节：\n有点紧张两个abc問很deep, 准备不够\n\nMetrics 环节：\nQ1: Avg. price 是不是一个好的KPI? Why?\nQ2:  Propose a metric to measure how well the platform prevent fraud\nQ2b: How to evaluate success of adding credit card verfication step.\n\nExperience 环节：\n国人大哥的case，如何increase booking, very open ended, 從supply/demand兩边下手\n\n\nBehavioral 环节：\nEnginee，特别nice，很輕鬆\n\n结果跪了，估计是我的presentation沒有很deep，加上",
      "a": "",
      "co": "Airbnb",
      "pos": "DS Aanlytics",
      "freq": ""
    },
    {
      "q": "1. HR pick up，简单介绍，逛了下HQ，楼设计的是不错。\n2. 3 两轮behavior，没啥可说的，但请务必极其重视！重要的事情所三遍。\n4. ML+coding，coding忘记了但是非常简单，medium肯定不是easy的难度，ML基本就是推logistics regression的梯度，loss用cross entropy比较好。. From 1point 3acres bbs\n5. Presentation，go through了take home challange，同时讲了自己做的一个项目，全程manager微笑不说话，其他组员问了几个问题。\n6. ML，如果设计一个新功能，满足客户是family的需求，怎么做，加什么feature，如何获取label，如何measure performance。\n7. manager轮，behavior+design，假如你从se",
      "a": "感谢楼主分享！请问推logistics regression的梯度是说要描述一下如何implement logistics regression吗？不 ...\n\n对，明确loss后就是推gradient公式 然后写了SGD的伪代码",
      "co": "Airbnb",
      "pos": "DS Algo",
      "freq": ""
    },
    {
      "q": "第一轮是data challenge 做了三天\n第一次做data challenge，因为没有经验就网搜参考了这个帖子https://stellarpeers.com/blog/metrics-airbnb-experiences-feature/ 做的\n\n就是参考那个帖子做的。。。完全没有用fancy 的任何metrics，就是最后一天报告弄的好看了一点\n\n后面有个朋友也是同样的数据，他用了特别复杂的metrics 反而挂了。。。",
      "a": "https://stellarpeers.com/case-collection/what-metrics-would-you-use-for-airbnbs-experiences-feature/",
      "co": "Airbnb",
      "pos": "DS Analytics",
      "freq": ""
    },
    {
      "q": "分享一个空起床的面经 空气床家的面试跟其他家很不一样 这次去一共六轮\n\n1. presentation\n\n讲一下之前做的project 和data challenge 的project\n\n2. hm 面\n\n问了下之前和team 工作的经验和set up data pipeline 的经验 . 1point 3 acres\n\n3. pm\n\n讲一个自己做的project 然后做一个case study 是关于身份验证的user flow 怎么改进user flow 定义metrics\n\n4. culture fit *2\n\n问了一些过去经历和天马行空的问题\n\n5. metrics\n\n估计是挂在这一轮了 半个小时做了三个case 第一个是给了一个metrics avg days taken for host to respond 问好不好怎么改进  第二个是怎么衡量search function",
      "a": "",
      "co": "Airbnb",
      "pos": "DS Analytics",
      "freq": ""
    },
    {
      "q": "技术面试只有一个，在白板上写写画画就好了，product sense面试有两个，但是都不太难，我狠狠的研究了他们过去的LinkedIn，聊的不错。Core Functional 面试，要熟读core values，看地里的总结题目，把从小到大的故事（真的是故事，不夸张，全是personal的故事想一次，结合core value来答就好了）。还好我过去做过不少志愿活动和社团活动在单位也是积极活跃，回答的很顺利，觉得自己简直就是AirBnB的role model。想着真的很开心，能去一个和自己生活目标match的公司。（不过还没有决定去不去）。. From 1point 3acres bbs\n还有一个面试就是和HM，也是是product sense和behavior结合的问题，虽然当时答的一般，不过过了。据说HM还很满意。",
      "a": "",
      "co": "Airbnb",
      "pos": "DS Analytics",
      "freq": ""
    },
    {
      "q": "一开始想复杂了感觉，后来觉得好像也没有那么复杂。总之尽全力写完，没有太强的信心，哎，等着吧。. http://1point3acres.com/\n增长airbnb booking rate，和之前地里面的不知道是不是一种类型的题目。\n总之你需要分析metrics, booking rate，画表，实验。. Waral dи,\n最后需要创建一个pdf 把你的所有code，分析过程，和一个presentation 的slides 放一起",
      "a": "",
      "co": "Airbnb",
      "pos": "DS Analytics",
      "freq": ""
    },
    {
      "q": "作业内容就是地里有的 -  给个城市，让你分析分析用什么metric可以按时间track bookings。 地里大神说过的了- 不要想太多，好好做metric 和insights就好了。",
      "a": "",
      "co": "Airbnb",
      "pos": "DS Analytics",
      "freq": ""
    },
    {
      "q": "资料：就是大家可以想像到的某个城市的airbnb接洽和订房资料\n（airbnb可以先谘询房东不订房，所以会有谘询接洽的纪录）\n目标：增加订房率\n请你根据资料提出重要的metrics和建议action items，然後把你的分析metrics和建议做成slides，简报对象是高管，简报长度要在8页之内\n最後也要附上你分析时用过的代码，无论结果有没有用上，大体是要考察怎麽解一个问题吧",
      "a": "",
      "co": "Airbnb",
      "pos": "DS Analytics",
      "freq": ""
    },
    {
      "q": "代码是KV store，大家之前发过。自认为答的很好。test case，follow up都写的比较顺。（MLE的代码轮和SDE是一样的）\n\n\n两轮SD是经典推荐系统和relisting problem都是地理的，我把所有面经题都准备过，自认为准备的很充分，当时回答的时候，推荐系统答的比较好，各种问题都回答上来了。面试官问了很多问题。\n第二轮比较坑，一开始上来就要share screen，答的时候感觉面试官有自己心里的答案，然后如果我没说他心坎儿，就卡在那里。问了改downstream service的evaluation output会怎么影响online metric，这个卡了一会儿，最后我问了他他怎么想的，达成共识，然后继续了。还问如何做geohash。我心想这不是SDE的SD题吗，面试时候很紧张，不过后来还是答出来了。后面的问题也都答上来了。\n\n\n注意SD本身是45分钟，最后这两",
      "a": "",
      "co": "Airbnb",
      "pos": "MLE",
      "freq": ""
    }
  ],
  "29": [
    {
      "q": "设计一个recommendation system，楼主用的是classification + ranking的方法，同时介绍了自己加了什么feature，另外讨论了一下model能用在什么地方等等。",
      "a": "",
      "co": "Airbnb",
      "pos": "DS Algo",
      "freq": ""
    },
    {
      "q": "有72个小时做题，类似一个recommendation system，我纠结了很久具体的methodology，是做成ranking还是recommendation。我最后选了ranking，但还是不太会处理，LTR这种算法以前从来没接触过。如果给一个比较标准的regression或者classification problem很可能会好一点，希望下次好运。\n.\n做完之后差不多三天收到系统发的拒信，还是很伤心的，毕竟花了很多时间。。。",
      "a": "",
      "co": "Airbnb",
      "pos": "DS Algo",
      "freq": ""
    },
    {
      "q": "一个senior MLE，google hangout。\n我介绍了自己之后，就开始一个ML case study，设计一个主页的歌曲推荐系统。\n说好的根据我的经历问问题呢QAQ……我自己从来没上手做过推荐系统，面试前几天突击读paper，blog，看知乎科普和各种youtube视频，熟悉推荐系统的概念。面试的时候，大概框架我还是能答出来，但有些技术细节还是不太清楚。面试官一直guide我从不同角度思考。\n问了怎么决定用feature based还是collaborative filtering，如果有multiple label怎么办，new user怎么办，new track怎么办。\n面到最后，我有点stuck，跟他说，你我点hint吧。他就开始在白板上画pipeline，然后给我讲他们是怎么解决这个问题的，受益匪浅。\n一个小时的面试大概35分钟他就问完问题了，之后20多分钟都是我在问问",
      "a": "",
      "co": "Spotify",
      "pos": "MLE",
      "freq": ""
    },
    {
      "q": "coding：地里那个modlist的题，写了一问半，没时间了（后来问了hr挂在这一环，无语）\nml sd：视频推荐 疯狂问infra怎么搞，logging怎么做，面试官一脸的冷漠。。。\nml 八股：给了一个x一个y，问怎么建模啥啥的， 然后给了一个图（里面两个分布），看图说话，中间穿插各种m八股，最后一些cold start问题\nbq：有没有失败经历，成功经历之类的",
      "a": "",
      "co": "Reddit",
      "pos": "MLE",
      "freq": ""
    },
    {
      "q": "2轮ml系统设计面试\n1. 和一个tl的大哥先聊天 然后给一个设计题 （这轮挂了）\n论坛上有很多搞笑图片 （搞笑的图片 上面加了一些文字），问如何improve search index 能够使得google搜索某个keyword就可以搜的到reddit的\n楼主的想法： 设计的模型就是为了提供keyword给做search engine optimization\n文字做ocr 得到text，取keyword\n图片做用cnn做image tagging这样的模型，预测出图片内容的tag，\n\n楼主没做过search engine optimization，请问大家对这个题有什么看法？\n\n2. ml设计，（这轮也挂了）\n设计一个视频推荐系统（用户每次滑动会推荐新的视频），注意不是主页的视频推荐，而是用户点了第一个视频以后屏幕/鼠标滑动翻页的后面一系列视频\n请问大家感觉这种推荐系统和Deep Ne",
      "a": "",
      "co": "Reddit",
      "pos": "MLE",
      "freq": ""
    }
  ],
  "30": [
    {
      "q": "Netflix research intern时间线是：\n2.12:网投\n2.18:oa\n2.19:做完oa\n2.20:hr approach确认时间\n2.28: vo 1没有问leetcode问了research background和knowledge graph相关的问题\n3.4:hr 确认vo 2约时间\n3.13: vo2 45 mins research presentation 15 mins hiring manager talk， 和hiring manager聊了一些intern project相关的问题比如说predict box office之类的问题，收到口头offer",
      "a": "",
      "co": "Netflix",
      "pos": "ML Research Intern",
      "freq": ""
    },
    {
      "q": "发面经求大米！面的是一道关于merge interval的题，这个题表面上是给了一个json文件，里面有 id, time, message.需要找到某个时间段的所有message。大家可以仔细研究一下leetcode上关于merge interval的medium题。",
      "a": "",
      "co": "Reddit",
      "pos": "MLE",
      "freq": ""
    },
    {
      "q": "最近面了下旅游网的Senior ML Scientist。因为是海投练手的，加上已经有G和MS的offer了，就面得比较放飞自我。面的组是做旅游买机票之后的附加benefits的bundle定价和组合策略的，我以前完全没做过，也不知道为啥被拉去面，反正就是瞎掰。投的时候是打算去看看有没有ML/AI coding的轮次，可以攒点经验，因为ML/AI coding的面经少不好准备，结果他们连LeetCode coding竟然都不考。\n\n第一轮30分钟，是case study。场景是假设买机票后可以附加一个benefit bundle，里面可以包括任意多的benefit种类有100多种，如何customize一个bundle来optimize整体的revenue。\n\n第二轮45分钟，问了下第一轮30分钟case study的简化版，只要求predict某一个benefit的接受率，加上一些ml ",
      "a": "",
      "co": "Expedia",
      "pos": "Sr. MLS",
      "freq": ""
    },
    {
      "q": "需要分享屏幕，面试官当场读题当场做，不可以Google查syntax，并且需要跑出正确的结果。\n题目实在是有点多已经记不太清楚了，记得最复杂的也就用到了case when, rolling window这种。应该算leetcode medium。. From 1point 3acres bbs\n唯一感觉需要注意的就是得仔细读题，题干很长，尽可能和interviewer clarify好再写，结果是必须要跑出结果才可以下一题。我当时有一个syntax好像是跟string aggregation相关不太会，interviwer也给了提示，所以感觉这种不常用的function给提示也不会扣分。",
      "a": "",
      "co": "Expedia",
      "pos": "Sr. DS",
      "freq": ""
    },
    {
      "q": "今天夜间做了一个Expedia的OA，其中3道题分为section1 和 Section2.\nSection 1 有两道题目，非常简单，都是basic的DFS或者Hashmap操作\nSection 2 有一道题目，题目也是非常简单，但是test case 在大数据上不过。 WTF。\n\n题目如下，在一个给定的array里面找到一个subset的和最接近threshold。\n比如 [1, 2, 4, 5] Threshold 是10， 我们可以凑成10 [1, 4, 5], 所以返回10\n比如[1, 40, 50] Threshold 是48， 我们不能凑成48， 但是最多可以凑到41， 返回41.\n\n返回subset和当中小于等于threshold的最大和。",
      "a": "",
      "co": "Expedia",
      "pos": "MLE",
      "freq": ""
    },
    {
      "q": "1. 阐述conditional random field\n2. 如何train model， 解决给一个餐厅、酒店 listing 配review的问题 （要不要显示review， 显示哪条review）\n事后诸葛亮找到一个相关 post https://www.tripadvisor.com/engi ... e-actually-helpful/\n3. coding: 找到array中第二大的integer, 重复的不算。比如【1，1，2，2】return 1. 复杂度O（N）\n\n感觉类似问题DS面试很多， 之前网飞也问过， 要不要给视频加subtitle。我在想有没有一些general solution。应该会另开一个帖子， 欢迎小伙伴交流；",
      "a": "",
      "co": "Expedia",
      "pos": "DS ML Track",
      "freq": ""
    },
    {
      "q": "第二轮问了许多过往的intern project，感觉主要是看怎么理解和解决问题的能力吧，具体的DL，LLM理论上面的东西基本没问，那个manager也说他不是做这个方面的.......\n\n\n然后最坑爹的来了，面试最后剩下12分钟的时候让我做一道大概medium level的leetcode题，大概是balanced string的升级版，其实不是很难，但是当时那个环境，就剩下十分钟去解还是很紧张，最后好不容易想到用stack，解完要debug的时候，面试官打住了，说时间到了...... 他说这个题只是为了考察我会不会coding，也不知道他说的是真是假（摊手）\n\n\n紧接着他又问我对这个intern的expectation是什么，我答完了之后他竟然又问了几个跟项目相关的问题（这大哥是真的很喜欢问follow-up question， 怪不得超时）。但有这时间你让我把code写完不行吗...",
      "a": "",
      "co": "Salesforce",
      "pos": "MLE Research Intern",
      "freq": ""
    },
    {
      "q": "这周刚刚做的卖力的OA，90min，一道题。本质上是蠡口 leetcode 72 其尔的变种（edit distance）：现在有三种valid操作\n\n1. Caesar cipher：统一将source的每一个char shift k，i.e., ‘ab’ -> 'bc' (edit cost 0)\n\n2. delete a char from source (edit cost 1)\n3. insert new char to source (edit cost 1)\n\n求source string 变成 target string所需要最少的edit cost。\n\n我用的遍历K（0~26） + DP （Python3），test case 9/13, 最后几个点TLE了。欢迎指导给出更好的答案",
      "a": "",
      "co": "Salesforce",
      "pos": "MLE ",
      "freq": ""
    }
  ]
};
export default rawQs;
