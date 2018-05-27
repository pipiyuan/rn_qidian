/*
创建iconfont；
若有新icon更新，则添加新的iconfont.ttf文件到 assets/Fonts 文件夹下（此处仅仅是备份字体文件），
然后把此。ttf文件更新到对应的ios和android的字体文件夹下；
注意：ttf的字体库名必须为iconfont，若要改名则需要在xcode内从新更改名称才行（字体库名不是指字体库文件名，而是指的是字体库的名称，点击安装时会有一个字体库名称，此名称与文件名称不一定同名）
 */
import createIconSet from 'react-native-vector-icons/lib/create-icon-set';
import glyphMap from './iconfont.json';

const iconSet = createIconSet(glyphMap, 'iconfont', 'iconfont.ttf');

export default iconSet;

export const Button = iconSet.Button;
export const TabBarItem = iconSet.TabBarItem;
export const TabBarItemIOS = iconSet.TabBarItemIOS;
export const ToolbarAndroid = iconSet.ToolbarAndroid;
export const getImageSource = iconSet.getImageSource;
