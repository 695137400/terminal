import { ConfigService } from 'terminus-core';
import { Frontend } from '../frontends/frontend';
import { BaseSession } from '../services/sessions.service';
export declare class TerminalFrontendService {
    private config;
    private containers;
    constructor(config: ConfigService);
    getFrontend(session: BaseSession): Frontend;
}
