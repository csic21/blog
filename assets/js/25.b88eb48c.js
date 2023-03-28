(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{508:function(e,s,a){"use strict";a.r(s);var t=a(4),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",[e._v("之前看这本书在第一步编译上没成功就没看了这回把这本书捡起来，该文章作为《深入理解java虚拟机》整本书的记录")])]),e._v(" "),a("h2",{attrs:{id:"一、手动编译jdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、手动编译jdk"}},[e._v("#")]),e._v(" 一、手动编译jdk")]),e._v(" "),a("h3",{attrs:{id:"_1-获取openjdk源码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-获取openjdk源码"}},[e._v("#")]),e._v(" 1. 获取OpenJDK源码")]),e._v(" "),a("p",[e._v("从官网下载：http://jdk.java.net/java-se-ri/8")]),e._v(" "),a("h3",{attrs:{id:"_2-系统需求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-系统需求"}},[e._v("#")]),e._v(" 2. 系统需求")]),e._v(" "),a("p",[e._v("本次使用wsl的ubuntu16.04LTS")]),e._v(" "),a("h3",{attrs:{id:"_3-构建编译环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-构建编译环境"}},[e._v("#")]),e._v(" 3. 构建编译环境")]),e._v(" "),a("p",[e._v("因为OpenJDK的各个组成部分有的是使用C++编译，有的是使用Java自身实现的，所以编译这些Java代码需要一个可用的JDK，官方称这个JDK为“Bootstrap JDK”,通常是使用上一个版本的JDK，所以我使用的版本为：jdk-7u80-linux-x64")]),e._v(" "),a("p",[e._v("下载依赖包")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo apt-get install libx11-dev libxext-dev libxrender-dev libxtst-dev libxt-dev libcups2-dev libfreetype6-dev libasound2-dev ccache\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"_4-开始编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-开始编译"}},[e._v("#")]),e._v(" 4. 开始编译")]),e._v(" "),a("p",[e._v("解压OpenJDK源码并进入目录")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("unzip openjdk-8u40-src-b25-10_feb_2015.zip\ncd openjdk/\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("运行命令")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo bash ./configure --with-target-bits=64 --with-boot-jdk=/home/jiazhifeng/workspace/jdk1.7.0_80/ --with-debug-level=slowdebug --enable-debug-symbols ZIP_DEBUGINFO_FILES=0\nsudo make all DISABLE_HOTSPOT_OS_VERSION_CHECK=OK ZIP_DEBUGINFO_FILES=0\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("==说明下第一条命令configure用到的参数作用：")]),e._v(" "),a("p",[e._v("–with-target-bits=64 ：指定生成64位jdk；")]),e._v(" "),a("p",[e._v("–with-boot-jdk=/usr/java/jdk1.7.0_80/：启动“Bootstrap JDK”的路径；")]),e._v(" "),a("p",[e._v("–with-debug-level=slowdebug：编译时debug的级别，有release, fastdebug, slowdebug 三种级别；")]),e._v(" "),a("p",[e._v("–enable-debug-symbols ZIP_DEBUGINFO_FILES=0：生成调试的符号信息，并且不压缩；==")]),e._v(" "),a("p",[e._v("这里出现了点问题")]),e._v(" "),a("p",[e._v("++configure: error: Could not find freetype! You might be able to fix this by running 'sudo apt-get install libfreetype6-dev'.\nconfigure exiting with result code 1++\n但是我安装以后还是出现这个问题,在stack overflow查看了一下需要额外增加一句配置")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("./configure --with-freetype-include=/usr/include/freetype2 --with-freetype-lib=/usr/lib/x86_64-linux-gnu\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("之后配置如下")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo bash ./configure --with-target-bits=64 --with-boot-jdk=/home/xg/jdk1.7.0_80/ --with-debug-level=slowdebug --enable-debug-symbols ZIP_DEBUGINFO_FILES=0 --with-freetype-include=/usr/include/freetype2 --with-freetype-lib=/usr/lib/x86_64-linux-gnu\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("出现如下代码算是可以进行下一步")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Configuration summary:\n* Debug level:    slowdebug\n* JDK variant:    normal\n* JVM variants:   server\n* OpenJDK target: OS: linux, CPU architecture: x86, address length: 64\n\nTools summary:\n* Boot JDK:       java version \"1.7.0_80\" Java(TM) SE Runtime Environment (build 1.7.0_80-b15) Java HotSpot(TM) 64-Bit Server VM (build 24.80-b11, mixed mode)  (at /home/xg/jdk1.7.0_80)\n* C Compiler:     gcc-5 (Ubuntu 5.4.0-6ubuntu1~16.04.12) 5.4.0 version 20160609 (at /usr/bin/gcc-5)\n* C++ Compiler:   g++-5 (Ubuntu 5.4.0-6ubuntu1~16.04.12) 5.4.0 version 20160609 (at /usr/bin/g++-5)\n\nBuild performance summary:\n* Cores to use:   10\n* Memory limit:   16335 MB\n* ccache status:  installed, but disabled (version older than 3.1.4)\n\nBuild performance tip: ccache gives a tremendous speedup for C++ recompilations.\nYou have ccache installed, but it is a version prior to 3.1.4. Try upgrading.\nYou might be able to fix this by running 'sudo apt-get install ccache'.\n\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br")])]),a("p",[e._v("执行编译前先设定下语言选项，可先执行echo $LANG，看下输出，如果不是C，则执行export LANG=C\n之后输入命令")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo make all DISABLE_HOTSPOT_OS_VERSION_CHECK=OK ZIP_DEBUGINFO_FILES=0\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"_5-验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-验证"}},[e._v("#")]),e._v(" 5. 验证")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd build/linux-x86_64-normal-server-slowdebug/images/j2sdk-image/bin/\n./java -version\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("成功编译")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('openjdk version "1.8.0-internal-debug"\nOpenJDK Runtime Environment (build 1.8.0-internal-debug-root_2019_12_13_19_39-b00)\nOpenJDK 64-Bit Server VM (build 25.40-b25-debug, mixed mode)\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("h3",{attrs:{id:"_6-出现的问题补充"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-出现的问题补充"}},[e._v("#")]),e._v(" 6.出现的问题补充")]),e._v(" "),a("h5",{attrs:{id:"①"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#①"}},[e._v("#")]),e._v(" ①")]),e._v(" "),a("p",[a("code",[e._v("/mnt/Data/AppsData/Repository/java/jdk/8/hotspot/src/os/linux/vm/os_linux.inline.hpp:127:18: warning: ‘int readdir_r(DIR*, dirent*, dirent**)’ is deprecated (declared at /usr/include/dirent.h:183) [-Wdeprecated-declarations] if((status = ::readdir_r(dirp, dbuf, &p)) != 0) {")]),e._v("\n原文链接：https://blog.csdn.net/desiyonan/article/details/80802066")]),e._v(" "),a("p",[e._v("分析原因:")]),e._v(" "),a("ol",[a("li",[e._v("gcc 编译环境中开启了相关警告提示")])]),e._v(" "),a("p",[e._v("解决方案：\n查看./hotspot/make/[you_os]/makefiles/gcc.make文件")]),e._v(" "),a("p",[e._v("在./hotspot/make/linux/makefiles/gcc.make文件中找到")]),e._v(" "),a("p",[a("code",[e._v("WARNINGS_ARE_ERRORS = -Werror")]),e._v("\n将其 注释 或改为 "),a("code",[e._v("WARNINGS_ARE_ERRORS = -Wno-all")])]),e._v(" "),a("p",[e._v("类似的警告都可以通过以下参数来设置，在该文件下找到WARNING_FLAGS，就在上述变量附近，添加需要注释的警告")]),e._v(" "),a("p",[a("code",[e._v("WARNING_FLAGS = -Wno-deprecated-declarations -Wno-unused-parameter -Wno-sign-compare -Wno-error")])]),e._v(" "),a("p",[e._v("或者关闭所有警告")]),e._v(" "),a("p",[e._v("WARNING_FLAGS = -w")]),e._v(" "),a("p",[e._v("不过貌似只对编译hotspot时有用")]),e._v(" "),a("h5",{attrs:{id:"②"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#②"}},[e._v("#")]),e._v(" ②")]),e._v(" "),a("p",[a("code",[e._v("left operand of shift expression ‘(-1 << 28)’ is negative [-fpermissive] invalid suffix on literal; C++11 requires a space between literal and string")])]),e._v(" "),a("p",[e._v("报这个错误是由于ubuntu18.x或是ubuntu19.x的gcc和g++版本太高了，导致编译通不过，所以需要将ubuntu中的gcc和g++版本降低。")]),e._v(" "),a("p",[e._v("解决方法如下：")]),e._v(" "),a("p",[e._v("先查看自己ubuntu中的gcc版本 gcc --version\n我是把gcc和g++降到gcc/g++5的版本，就可以编译通过了")]),e._v(" "),a("p",[e._v("下载gcc/g++ 5：\nsudo apt-get install -y gcc-5\nsudo apt-get install -y g++-52.\n链接gcc/g++实现降级：\ncd /usr/bin\nsudo rm gcc\nsudo ln -s gcc-5 gcc\nsudo rm g++\nsudo ln -s g++-5 g++\n再次查看gcc版本，可以看到已经降级.")]),e._v(" "),a("p",[e._v("gcc --version")]),e._v(" "),a("p",[e._v("链接：https://www.jianshu.com/p/8a53708dd08a")]),e._v(" "),a("h5",{attrs:{id:"③"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#③"}},[e._v("#")]),e._v(" ③")]),e._v(" "),a("p",[e._v("如果遇到： \"this OS is not supported:\" 'uname -a';exit 1; 这个错误就是内核版本不支持的问题（openjdk8我还没遇到这个错误），在编译Hotspot时通不过")]),e._v(" "),a("p",[e._v("解决：找到hotspot/make/linux/Makefile,在Makefile文件中定位到SUPPORTED_OS_VERSION的代码，在末尾添加自己ubuntu当前的内核版本。")]),e._v(" "),a("p",[e._v("SUPPORTED_OS_VERSION = 2.4% 2.5% 2.6% 3% 4%")]),e._v(" "),a("p",[e._v("ubuntu18.04的内核版本是4.x%的，大家查看下自己的内核版本是多少，如果Makefile文件中有，就不用添加了，没有添加上就行\n本人的是 5.0的所以就在末尾添加5%\n链接：https://www.jianshu.com/p/8a53708dd08a")])])}),[],!1,null,null,null);s.default=n.exports}}]);