// third-party
import { FormattedMessage } from 'react-intl';

// project import
import { useSelector } from 'store';

// assets
import {
    IconChartArcs,
    IconClipboardList,
    IconChartInfographic,
    IconChartBar,
    IconChartPie,
    IconChartLine,
    IconChartArea
} from '@tabler/icons';

const icons = {
    widget: IconChartArcs,
    statistics: IconChartArcs,
    data: IconClipboardList,
    chart: IconChartInfographic,
    bar: IconChartBar,
    pie: IconChartPie,
    line: IconChartLine,
    area: IconChartArea
};

// ==============================|| MENU ITEMS - API ||============================== //

export const Menu = () => {
    const { menu } = useSelector((state) => state.menu);

    // If you want to use static widgets instead of API, uncomment this:
    /*
  const staticWidgetMenu = {
    id: 'widget',
    title: <FormattedMessage id="widget" />,
    type: 'group',
    icon: icons.widget,
    children: [
      {
        id: 'statistics',
        title: <FormattedMessage id="statistics" />,
        type: 'collapse',
        icon: icons.statistics,
        children: [
          {
            id: 'statistics-card',
            title: <FormattedMessage id="statistics-card" />,
            type: 'item',
            url: '/widget/statistics-card',
            breadcrumbs: false,
          },
          {
            id: 'statistics-chart',
            title: <FormattedMessage id="statistics-chart" />,
            type: 'item',
            url: '/widget/statistics-chart',
            breadcrumbs: false,
          },
        ],
      },
      {
        id: 'data',
        title: <FormattedMessage id="data" />,
        type: 'collapse',
        icon: icons.data,
        children: [
          {
            id: 'data-table',
            title: <FormattedMessage id="data-table" />,
            type: 'item',
            url: '/widget/data-table',
            breadcrumbs: false,
          },
          {
            id: 'data-list',
            title: <FormattedMessage id="data-list" />,
            type: 'item',
            url: '/widget/data-list',
            breadcrumbs: false,
          },
        ],
      },
      {
        id: 'charts',
        title: <FormattedMessage id="charts" />,
        type: 'collapse',
        icon: icons.chart,
        children: [
          {
            id: 'bar-chart',
            title: <FormattedMessage id="bar-chart" />,
            type: 'item',
            url: '/widget/bar-chart',
            breadcrumbs: false,
          },
          {
            id: 'pie-chart',
            title: <FormattedMessage id="pie-chart" />,
            type: 'item',
            url: '/widget/pie-chart',
            breadcrumbs: false,
          },
          {
            id: 'line-chart',
            title: <FormattedMessage id="line-chart" />,
            type: 'item',
            url: '/widget/line-chart',
            breadcrumbs: false,
          },
          {
            id: 'area-chart',
            title: <FormattedMessage id="area-chart" />,
            type: 'item',
            url: '/widget/area-chart',
            breadcrumbs: false,
          },
        ],
      },
    ],
  };
  
  return staticWidgetMenu;
  */

    // Original API-based approach
    const SubChildrenLis = (subChildrenLis) =>
        subChildrenLis?.map((subList) => ({
            ...subList,
            title: <FormattedMessage id={`${subList.title}`} />,
            icon: icons[subList.icon]
        }));

    const menuItem = (subList) => {
        const list = {
            ...subList,
            title: <FormattedMessage id={`${subList.title}`} />,
            icon: icons[subList.icon]
        };

        if (subList.type === 'collapse') {
            list.children = SubChildrenLis(subList.children);
        }
        return list;
    };

    const withoutMenu = menu?.children?.filter((item) => item.id !== 'no-menu');

    const ChildrenList = withoutMenu?.map((subList) => menuItem(subList));

    const menuList = {
        ...menu,
        title: <FormattedMessage id={`${menu.title}`} />,
        icon: icons[menu.icon],
        children: ChildrenList
    };

    return menuList;
};
