export interface Course {
    name: string,
    exerciseCount: number,
    description?: string,
}

export interface ContentProps  {
    courseParts: CoursePart[]
}

export interface CoursePartBasic extends Course {
    kind: "basic"
}
  
export interface CoursePartGroup extends Course {
    groupProjectCount: number;
    kind: "group"
}
  
export interface CoursePartBackground extends Course {
    backgroundMaterial: string;
    kind: "background"
}

export interface CoursePartBackend extends Course {
    requirements: string[],
    kind: 'special'
}
  
export type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground | CoursePartBackend