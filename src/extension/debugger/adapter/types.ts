// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

'use strict';

/**
 * A representation of a Python runtime's version.
 *
 * @prop raw - the original version string
 * @prop major - the "major" version
 * @prop minor - the "minor" version
 * @prop patch - the "patch" (or "micro") version
 * @prop build - the build ID of the executable
 * @prop prerelease - identifies a tag in the release process (e.g. beta 1)
 */
// Note that this is currently compatible with SemVer objects,
// but we may change it to match the format of sys.version_info.
export type PythonVersion = {
    raw: string;
    major: number;
    minor: number;
    patch: number;
    // Eventually it may be useful to match what sys.version_info
    // provides for the remainder here:
    // * releaseLevel: 'alpha' | 'beta' | 'candidate' | 'final';
    // * serial: number;
    build: string[];
    prerelease: string[];
};

export type PythonEnvironment = {
    interpreterPath: string;
    envFolderPath: string;
    version?: string[];
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const IPromptShowState = Symbol('IPromptShowState');
export interface IPromptShowState {
    shouldShowPrompt(): boolean;
    setShowPrompt(show: boolean): void;
}
