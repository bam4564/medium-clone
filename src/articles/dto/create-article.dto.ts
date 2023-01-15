import { ApiProperty } from '@nestjs/swagger';

// The @ApiProperty decorators are required to make the class 
// properties visible to the SwaggerModule.
export class CreateArticleDto {
    @ApiProperty()
    title: string;

    @ApiProperty({ required: false })
    description?: string;

    @ApiProperty()
    body: string;

    @ApiProperty({ required: false, default: false })
    published?: boolean = false;
}