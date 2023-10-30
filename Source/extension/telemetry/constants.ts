/* eslint-disable @typescript-eslint/naming-convention */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

"use strict";

export enum EventName {
	DEBUG_SUCCESS_ACTIVATION = "DEBUG.SUCCESS_ACTIVATION",
	DEBUG_IN_TERMINAL_BUTTON = "DEBUG.IN_TERMINAL",
	DEBUG_ADAPTER_USING_WHEELS_PATH = "DEBUG_ADAPTER.USING_WHEELS_PATH",
	DEBUG_SESSION_ERROR = "DEBUG_SESSION.ERROR",
	DEBUG_SESSION_START = "DEBUG_SESSION.START",
	DEBUG_SESSION_STOP = "DEBUG_SESSION.STOP",
	DEBUG_SESSION_USER_CODE_RUNNING = "DEBUG_SESSION.USER_CODE_RUNNING",
	DEBUGGER = "DEBUGGER",
	DEBUGGER_ATTACH_TO_CHILD_PROCESS = "DEBUGGER.ATTACH_TO_CHILD_PROCESS",
	DEBUGGER_ATTACH_TO_LOCAL_PROCESS = "DEBUGGER.ATTACH_TO_LOCAL_PROCESS",
	DEBUGGER_CONFIGURATION_PROMPTS = "DEBUGGER.CONFIGURATION.PROMPTS",
	DEBUGGER_CONFIGURATION_PROMPTS_IN_LAUNCH_JSON = "DEBUGGER.CONFIGURATION.PROMPTS.IN.LAUNCH.JSON",
	ENVFILE_VARIABLE_SUBSTITUTION = "ENVFILE_VARIABLE_SUBSTITUTION",
}
