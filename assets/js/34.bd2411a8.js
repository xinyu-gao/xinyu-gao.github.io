(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{560:function(s,a,t){"use strict";t.r(a);var e=t(2),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"docker-简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-简介"}},[s._v("#")]),s._v(" Docker 简介")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("Docker")]),s._v(" "),t("p",[s._v("Docker 是一个允许用户“在任何地方构建、分发及运行任何应用”的平台。\nDocker单词原指码头工人，比喻指将软件放在“集装箱内”。")])]),s._v(" "),t("h3",{attrs:{id:"_1-docker-的好处"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-docker-的好处"}},[s._v("#")]),s._v(" 1. Docker 的好处")]),s._v(" "),t("p",[s._v("某种程度上代替虚拟机（如果用户只关心应用程序而不是操作系统）")]),s._v(" "),t("p",[s._v("隔离环境，不影响全局环境。")]),s._v(" "),t("p",[s._v("打包软件、快速部署。")]),s._v(" "),t("p",[s._v("持续交付、迁移便捷。")]),s._v(" "),t("h3",{attrs:{id:"_2-基本概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-基本概念"}},[s._v("#")]),s._v(" 2. 基本概念")]),s._v(" "),t("p",[t("strong",[s._v("镜像")]),s._v("：")]),s._v(" "),t("p",[s._v("镜像是文件系统层和一些元数据的集合，他们合在一起，以 Docker 容器的形式运行。")]),s._v(" "),t("p",[t("strong",[s._v("容器")]),s._v("：")]),s._v(" "),t("p",[s._v("容器是镜像的运行实例。可以使用同一个镜像运行多个容器。")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("Docker 镜像是运行容器的模板，这与程序文件和运行进程的差异类似；\n也可以理解为类与对象的区别。")])]),s._v(" "),t("p",[t("strong",[s._v("层")]),s._v("：")]),s._v(" "),t("p",[s._v("层是文件变更的集合。")]),s._v(" "),t("p",[t("strong",[s._v("仓库")]),s._v("：")]),s._v(" "),t("p",[s._v("一个仓库管理服务中可以包含多个仓库（Repository）；")]),s._v(" "),t("p",[s._v("每个仓库可以包含多个 标签（Tag）；")]),s._v(" "),t("p",[s._v("每个标签对应一个镜像。")]),s._v(" "),t("p",[s._v("通常，一个仓库会包含同一个软件不同版本的镜像，而标签就常用于对应该软件的各个版本。\n我们可以通过 "),t("code",[s._v("<仓库名>:<标签>")]),s._v(" 的格式来指定具体是这个软件哪个版本的镜像。\n如果不给出标签，将以 "),t("code",[s._v("latest")]),s._v(" 作为默认标签。")]),s._v(" "),t("h2",{attrs:{id:"镜像操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像操作"}},[s._v("#")]),s._v(" 镜像操作")]),s._v(" "),t("h3",{attrs:{id:"_1-查找镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-查找镜像"}},[s._v("#")]),s._v(" 1. 查找镜像")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker search "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPTIONS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("TERM")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从Docker Hub查找镜像名包含java的镜像")]),s._v("\n$ docker search java\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("strong",[s._v("列表说明")]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("NAME: 镜像仓库源的名称。")]),s._v(" "),t("li",[s._v("DESCRIPTION: 镜像的描述。")]),s._v(" "),t("li",[s._v("stars: 类似 Github 里面的 star，表示点赞、喜欢的意思。")]),s._v(" "),t("li",[s._v("OFFICIAL: 是否 docker 官方发布。")]),s._v(" "),t("li",[s._v("AUTOMATED: 自动构建。")])]),s._v(" "),t("h3",{attrs:{id:"_2-获取镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-获取镜像"}},[s._v("#")]),s._v(" 2. 获取镜像")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker pull "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("选项"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Docker Registry 地址"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":端口号"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("仓库名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":标签"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("选项")]),s._v("：")]),s._v(" "),t("p",[t("code",[s._v("-a")]),s._v(" ：拉取所有 tagged 镜像。")]),s._v(" "),t("p",[t("strong",[s._v("Docker 镜像仓库地址")]),s._v("：")]),s._v(" "),t("p",[s._v("地址的格式一般是 "),t("code",[s._v("<域名/IP>[:端口号]")]),s._v("。默认地址是 Docker Hub(docker.io)。")]),s._v(" "),t("p",[t("strong",[s._v("仓库名")]),s._v("：")]),s._v(" "),t("p",[s._v("如之前所说，这里的仓库名是两段式名称，即 <用户名>/<软件名>。\n对于 Docker Hub，如果不给出用户名，则默认为 library，也就是官方镜像。")]),s._v(" "),t("p",[t("strong",[s._v("标签")]),s._v("：")]),s._v(" "),t("p",[s._v("通常为版本号，如果不指定，则默认为 latest。")]),s._v(" "),t("h3",{attrs:{id:"_3-列出镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-列出镜像"}},[s._v("#")]),s._v(" 3. 列出镜像")]),s._v(" "),t("p",[s._v("显示顶层镜像，列出 "),t("strong",[s._v("仓库名")]),s._v("、"),t("strong",[s._v("标签")]),s._v("、"),t("strong",[s._v("镜像 ID")]),s._v("、"),t("strong",[s._v("创建时间")]),s._v(" 以及 "),t("strong",[s._v("所占用的空间")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker image "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("显示虚悬镜像：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker image "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -f "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dangling")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("虚悬镜像")]),s._v(" "),t("p",[s._v("由于新旧镜像同名，旧镜像名称被取消，从而出现仓库名、标签均为 "),t("code",[s._v("<none>")]),s._v(" 的镜像。\n一般来说，虚悬镜像已经失去了存在的价值，是可以随意删除的。")])]),s._v(" "),t("p",[s._v("显示所有镜像（包含中间镜像）：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker image "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -a\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("中间镜像")]),s._v(" "),t("p",[s._v("无标签的镜像很多都是中间层镜像，是其它镜像所依赖的镜像。\n这些无标签镜像不应该删除，否则会导致上层镜像因为依赖丢失而出错。")])]),s._v(" "),t("h3",{attrs:{id:"_4-删除镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-删除镜像"}},[s._v("#")]),s._v(" 4. 删除镜像")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker image "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("选项"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("镜像"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("镜像"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("镜像：可以是 ID、镜像名、镜像摘要等，唯一标识即可。")]),s._v(" "),t("h2",{attrs:{id:"容器操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器操作"}},[s._v("#")]),s._v(" 容器操作")]),s._v(" "),t("h3",{attrs:{id:"_1-运行容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-运行容器"}},[s._v("#")]),s._v(" 1. 运行容器")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker run\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("参数：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("-t")]),s._v(" 选项让Docker分配一个伪终端（pseudo-tty）并绑定到容器的标准输入上。")]),s._v(" "),t("li",[t("code",[s._v("-i")]),s._v(" 让容器的标准输入保持打开。")]),s._v(" "),t("li",[t("code",[s._v("-d")]),s._v(" 以守护态运行，即让 Docker 在后台运行而不是直接把执行命令的结果输出在当前宿主机下，启动后会返回一个唯一的 id。\n通过 "),t("code",[s._v("docker container logs [container ID or NAMES]")]),s._v(" 命令查看输出信息。")])]),s._v(" "),t("h3",{attrs:{id:"_2-启动、终止和重启"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-启动、终止和重启"}},[s._v("#")]),s._v(" 2. 启动、终止和重启")]),s._v(" "),t("p",[s._v("当容器被关闭，可以将一个已经终止的容器启动运行：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker container start "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("container ID or NAMES"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("终止一个运行中的容器：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker container stop "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("container ID or NAMES"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("将一个运行态的容器终止，然后再重新启动它：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker container restart "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("container ID or NAMES"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_3-删除容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-删除容器"}},[s._v("#")]),s._v(" 3. 删除容器")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker container "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("container ID or NAMES"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("删除未停止运行的容器需要加入 "),t("code",[s._v("-f")]),s._v(" 参数发送 SIGKILL 信号给容器。")]),s._v(" "),t("p",[s._v("或者使用 "),t("code",[s._v("stop")]),s._v(" 命令先停止运行容器。")])]),s._v(" "),t("p",[s._v("清理掉所有处于终止状态的容器：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker container prune\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("警告")]),s._v(" "),t("p",[s._v("执行此命令前，一定确保所需要的容器都在运行中，否则会误删。慎用")])]),s._v(" "),t("h3",{attrs:{id:"_4-进入容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-进入容器"}},[s._v("#")]),s._v(" 4. 进入容器")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("container ID or NAMES"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("参数说明")]),s._v("：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("-it")]),s._v("：同上，")]),s._v(" "),t("li",[t("code",[s._v("bash")]),s._v("：使用 bash 界面。")])]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("警告")]),s._v(" "),t("p",[s._v("如果使用 "),t("code",[s._v("docker attach")]),s._v(" 命令的话，从这个 stdin 中 exit，会导致容器的停止。")])]),s._v(" "),t("h3",{attrs:{id:"_5-导入导出容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-导入导出容器"}},[s._v("#")]),s._v(" 5. 导入导出容器")]),s._v(" "),t("p",[s._v("如果要导出本地某个容器，可以使用 "),t("code",[s._v("docker export")]),s._v(" 命令导出容器快照到本地文件：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("container ID or NAMES"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("压缩包名.tar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("使用 "),t("code",[s._v("docker import")]),s._v(" 从容器快照文件中再导入为镜像：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ubuntu.tar "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" docker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" - test/ubuntu:v1.0\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 也可以通过指定 URL 或者某个目录来导入")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" http://example.com/exampleimage.tgz example/imagerepo\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);