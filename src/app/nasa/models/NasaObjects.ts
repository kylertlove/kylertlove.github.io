
export interface NasaResponseObject {
    element_count: number;
    links: links;
    near_earth_objects:NearEarthObjectList;
}
export interface NearEarthObjectList {
    
}

export interface links{
    next:string;
    self:string;
    prev:string;
}

export interface NearEarthObject{

}

