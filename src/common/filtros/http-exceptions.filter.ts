import { ArgumentsHost, ExceptionFilter, HttpException, HttpStatus, Logger } from "@nestjs/common";

export class TodasExcepciones implements ExceptionFilter{
    
    private readonly logger = new Logger(TodasExcepciones.name);
    catch(exception: any, host: ArgumentsHost) {
        
        const cts = host.switchToHttp();
        const response = cts.getResponse();
        const request = cts.getRequest();
        const status = 
        exception instanceof HttpException ? exception.getStatus(): HttpStatus.INTERNAL_SERVER_ERROR;

        const msg = exception instanceof HttpException ? exception.getResponse() : exception;

        this.logger.error(`Status:${status} Error: ${JSON.stringify(msg)}`);

        response.status(status).json({
            time:new Date().toISOString(),
            path:request.url,
            error:msg,
        })

    }
}