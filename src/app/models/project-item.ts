
/**
 * Title, subTitle, Content, img, alt, link, icon
 */
export class ProjectItem {

     cardTitle: string;
     cardSubTitle: string;
     cardContent: string;
     cardImg: string;
     cardImgAlt: string; 
     cardRouterLink: string;
     cardIcon: string;

    constructor(title, subtitle, content, img, alt, link, icon) {
        this.cardTitle = title;
        this.cardSubTitle = subtitle;
        this.cardContent = content;
        this.cardImg = img;
        this.cardImgAlt = alt;
        this.cardRouterLink = link;
        this.cardIcon = icon;
    }
}