function getCarName(manufactureName: string , model?: string) : string {
    if(model){
        return manufactureName + " " + model;
    }
    return manufactureName;
} 