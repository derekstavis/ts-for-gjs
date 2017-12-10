/**
 * GObject-2.0
 */

import * as Gjs from './Gjs'
import * as GLib from './GLib'
export enum BindingFlags {
    DEFAULT,
    BIDIRECTIONAL,
    SYNC_CREATE,
    INVERT_BOOLEAN,
}
export enum ConnectFlags {
    AFTER,
    SWAPPED,
}
export enum ParamFlags {
    READABLE,
    WRITABLE,
    READWRITE,
    CONSTRUCT,
    CONSTRUCT_ONLY,
    LAX_VALIDATION,
    STATIC_NAME,
    PRIVATE,
    STATIC_NICK,
    STATIC_BLURB,
    EXPLICIT_NOTIFY,
    DEPRECATED,
}
export enum SignalFlags {
    RUN_FIRST,
    RUN_LAST,
    RUN_CLEANUP,
    NO_RECURSE,
    DETAILED,
    ACTION,
    NO_HOOKS,
    MUST_COLLECT,
    DEPRECATED,
}
export enum SignalMatchType {
    ID,
    DETAIL,
    CLOSURE,
    FUNC,
    DATA,
    UNBLOCKED,
}
export enum TypeDebugFlags {
    NONE,
    OBJECTS,
    SIGNALS,
    INSTANCE_COUNT,
    MASK,
}
export enum TypeFlags {
    ABSTRACT,
    VALUE_ABSTRACT,
}
export enum TypeFundamentalFlags {
    CLASSED,
    INSTANTIATABLE,
    DERIVABLE,
    DEEP_DERIVABLE,
}
export const PARAM_MASK:number
export const PARAM_STATIC_STRINGS:number
export const PARAM_USER_SHIFT:number
export const SIGNAL_FLAGS_MASK:number
export const SIGNAL_MATCH_MASK:number
export const TYPE_FLAG_RESERVED_ID_BIT:number
export const TYPE_FUNDAMENTAL_MAX:number
export const TYPE_FUNDAMENTAL_SHIFT:number
export const TYPE_RESERVED_BSE_FIRST:number
export const TYPE_RESERVED_BSE_LAST:number
export const TYPE_RESERVED_GLIB_FIRST:number
export const TYPE_RESERVED_GLIB_LAST:number
export const TYPE_RESERVED_USER_FIRST:number
export const VALUE_COLLECT_FORMAT_MAX_LENGTH:number
export const VALUE_NOCOPY_CONTENTS:number
export function boxed_copy(boxed_type: number, src_boxed: object): object
export function boxed_free(boxed_type: number, boxed: object): void
export function cclosure_marshal_BOOLEAN__BOXED_BOXED(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosure_marshal_BOOLEAN__FLAGS(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosure_marshal_STRING__OBJECT_POINTER(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosure_marshal_VOID__BOOLEAN(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosure_marshal_VOID__BOXED(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosure_marshal_VOID__CHAR(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosure_marshal_VOID__DOUBLE(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosure_marshal_VOID__ENUM(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosure_marshal_VOID__FLAGS(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosure_marshal_VOID__FLOAT(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosure_marshal_VOID__INT(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosure_marshal_VOID__LONG(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosure_marshal_VOID__OBJECT(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosure_marshal_VOID__PARAM(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosure_marshal_VOID__POINTER(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosure_marshal_VOID__STRING(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosure_marshal_VOID__UCHAR(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosure_marshal_VOID__UINT(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosure_marshal_VOID__UINT_POINTER(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosure_marshal_VOID__ULONG(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosure_marshal_VOID__VARIANT(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosure_marshal_VOID__VOID(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosure_marshal_generic(closure: Closure, return_gvalue: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function enum_complete_type_info(g_enum_type: number, const_values: EnumValue): /* info */ TypeInfo
export function enum_get_value(enum_class: EnumClass, value: number): EnumValue
export function enum_get_value_by_name(enum_class: EnumClass, name: string): EnumValue
export function enum_get_value_by_nick(enum_class: EnumClass, nick: string): EnumValue
export function enum_register_static(name: string, const_static_values: EnumValue): number
export function enum_to_string(g_enum_type: number, value: number): string
export function flags_complete_type_info(g_flags_type: number, const_values: FlagsValue): /* info */ TypeInfo
export function flags_get_first_value(flags_class: FlagsClass, value: number): FlagsValue
export function flags_get_value_by_name(flags_class: FlagsClass, name: string): FlagsValue
export function flags_get_value_by_nick(flags_class: FlagsClass, nick: string): FlagsValue
export function flags_register_static(name: string, const_static_values: FlagsValue): number
export function flags_to_string(flags_type: number, value: number): string
export function gtype_get_type(): number
export function param_spec_boolean(name: string, nick: string, blurb: string, default_value: boolean, flags: ParamFlags): ParamSpec
export function param_spec_boxed(name: string, nick: string, blurb: string, boxed_type: number, flags: ParamFlags): ParamSpec
export function param_spec_char(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
export function param_spec_double(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
export function param_spec_enum(name: string, nick: string, blurb: string, enum_type: number, default_value: number, flags: ParamFlags): ParamSpec
export function param_spec_flags(name: string, nick: string, blurb: string, flags_type: number, default_value: number, flags: ParamFlags): ParamSpec
export function param_spec_float(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
export function param_spec_gtype(name: string, nick: string, blurb: string, is_a_type: number, flags: ParamFlags): ParamSpec
export function param_spec_int(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
export function param_spec_int64(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
export function param_spec_long(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
export function param_spec_object(name: string, nick: string, blurb: string, object_type: number, flags: ParamFlags): ParamSpec
export function param_spec_param(name: string, nick: string, blurb: string, param_type: number, flags: ParamFlags): ParamSpec
export function param_spec_pointer(name: string, nick: string, blurb: string, flags: ParamFlags): ParamSpec
export function param_spec_pool_new(type_prefixing: boolean): ParamSpecPool
export function param_spec_string(name: string, nick: string, blurb: string, default_value: string | null, flags: ParamFlags): ParamSpec
export function param_spec_uchar(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
export function param_spec_uint(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
export function param_spec_uint64(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
export function param_spec_ulong(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
export function param_spec_unichar(name: string, nick: string, blurb: string, default_value: number, flags: ParamFlags): ParamSpec
export function param_spec_variant(name: string, nick: string, blurb: string, type: GLib.VariantType, default_value: GLib.Variant | null, flags: ParamFlags): ParamSpec
export function param_type_register_static(name: string, pspec_info: ParamSpecTypeInfo): number
export function param_value_convert(pspec: ParamSpec, src_value: Value, dest_value: Value, strict_validation: boolean): boolean
export function param_value_defaults(pspec: ParamSpec, value: Value): boolean
export function param_value_set_default(pspec: ParamSpec, value: Value): void
export function param_value_validate(pspec: ParamSpec, value: Value): boolean
export function param_values_cmp(pspec: ParamSpec, value1: Value, value2: Value): number
export function pointer_type_register_static(name: string): number
export function signal_accumulator_first_wins(ihint: SignalInvocationHint, return_accu: Value, handler_return: Value, dummy?: object | null): boolean
export function signal_accumulator_true_handled(ihint: SignalInvocationHint, return_accu: Value, handler_return: Value, dummy?: object | null): boolean
export function signal_add_emission_hook(signal_id: number, detail: GLib.Quark, hook_func: SignalEmissionHook, data_destroy: GLib.DestroyNotify): number
export function signal_chain_from_overridden(instance_and_params: Value[], return_value: Value): void
export function signal_connect_closure(instance: Object, detailed_signal: string, closure: Closure, after: boolean): number
export function signal_connect_closure_by_id(instance: Object, signal_id: number, detail: GLib.Quark, closure: Closure, after: boolean): number
export function signal_emitv(instance_and_params: Value[], signal_id: number, detail: GLib.Quark, return_value: Value): void
export function signal_get_invocation_hint(instance: Object): SignalInvocationHint
export function signal_handler_block(instance: Object, handler_id: number): void
export function signal_handler_disconnect(instance: Object, handler_id: number): void
export function signal_handler_find(instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, closure?: Closure | null, func?: object | null, data?: object | null): number
export function signal_handler_is_connected(instance: Object, handler_id: number): boolean
export function signal_handler_unblock(instance: Object, handler_id: number): void
export function signal_handlers_block_matched(instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, closure?: Closure | null, func?: object | null, data?: object | null): number
export function signal_handlers_destroy(instance: Object): void
export function signal_handlers_disconnect_matched(instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, closure?: Closure | null, func?: object | null, data?: object | null): number
export function signal_handlers_unblock_matched(instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, closure?: Closure | null, func?: object | null, data?: object | null): number
export function signal_has_handler_pending(instance: Object, signal_id: number, detail: GLib.Quark, may_be_blocked: boolean): boolean
export function signal_list_ids(itype: number): number[]
export function signal_lookup(name: string, itype: number): number
export function signal_name(signal_id: number): string
export function signal_override_class_closure(signal_id: number, instance_type: number, class_closure: Closure): void
export function signal_parse_name(detailed_signal: string, itype: number, force_detail_quark: boolean): [ /* returnType */ boolean, /* signal_id_p */ number, /* detail_p */ GLib.Quark ]
export function signal_query(signal_id: number): /* query */ SignalQuery
export function signal_remove_emission_hook(signal_id: number, hook_id: number): void
export function signal_set_va_marshaller(signal_id: number, instance_type: number, va_marshaller: SignalCVaMarshaller): void
export function signal_stop_emission(instance: Object, signal_id: number, detail: GLib.Quark): void
export function signal_stop_emission_by_name(instance: Object, detailed_signal: string): void
export function signal_type_cclosure_new(itype: number, struct_offset: number): Closure
export function source_set_closure(source: GLib.Source, closure: Closure): void
export function source_set_dummy_callback(source: GLib.Source): void
export function strdup_value_contents(value: Value): string
export function type_add_class_private(class_type: number, private_size: number): void
export function type_add_instance_private(class_type: number, private_size: number): number
export function type_add_interface_dynamic(instance_type: number, interface_type: number, plugin: TypePlugin): void
export function type_add_interface_static(instance_type: number, interface_type: number, info: InterfaceInfo): void
export function type_check_class_is_a(g_class: TypeClass, is_a_type: number): boolean
export function type_check_instance(instance: TypeInstance): boolean
export function type_check_instance_is_a(instance: TypeInstance, iface_type: number): boolean
export function type_check_instance_is_fundamentally_a(instance: TypeInstance, fundamental_type: number): boolean
export function type_check_is_value_type(type: number): boolean
export function type_check_value(value: Value): boolean
export function type_check_value_holds(value: Value, type: number): boolean
export function type_children(type: number): number
export function type_class_adjust_private_offset(g_class: object | null, private_size_or_offset: number): void
export function type_class_peek(type: number): TypeClass
export function type_class_peek_static(type: number): TypeClass
export function type_class_ref(type: number): TypeClass
export function type_default_interface_peek(g_type: number): TypeInterface
export function type_default_interface_ref(g_type: number): TypeInterface
export function type_default_interface_unref(g_iface: TypeInterface): void
export function type_depth(type: number): number
export function type_ensure(type: number): void
export function type_free_instance(instance: TypeInstance): void
export function type_from_name(name: string): number
export function type_fundamental(type_id: number): number
export function type_fundamental_next(): number
export function type_get_instance_count(type: number): number
export function type_get_plugin(type: number): TypePlugin
export function type_get_qdata(type: number, quark: GLib.Quark): object | null
export function type_get_type_registration_serial(): number
export function type_init(): void
export function type_init_with_debug_flags(debug_flags: TypeDebugFlags): void
export function type_interface_add_prerequisite(interface_type: number, prerequisite_type: number): void
export function type_interface_get_plugin(instance_type: number, interface_type: number): TypePlugin
export function type_interface_peek(instance_class: TypeClass, iface_type: number): TypeInterface
export function type_interface_prerequisites(interface_type: number): number
export function type_interfaces(type: number): number
export function type_is_a(type: number, is_a_type: number): boolean
export function type_name(type: number): string
export function type_name_from_class(g_class: TypeClass): string
export function type_name_from_instance(instance: TypeInstance): string
export function type_next_base(leaf_type: number, root_type: number): number
export function type_parent(type: number): number
export function type_qname(type: number): GLib.Quark
export function type_query(type: number): /* query */ TypeQuery
export function type_register_dynamic(parent_type: number, type_name: string, plugin: TypePlugin, flags: TypeFlags): number
export function type_register_fundamental(type_id: number, type_name: string, info: TypeInfo, finfo: TypeFundamentalInfo, flags: TypeFlags): number
export function type_register_static(parent_type: number, type_name: string, info: TypeInfo, flags: TypeFlags): number
export function type_set_qdata(type: number, quark: GLib.Quark, data?: object | null): void
export function type_test_flags(type: number, flags: number): boolean
export function value_type_compatible(src_type: number, dest_type: number): boolean
export function value_type_transformable(src_type: number, dest_type: number): boolean
export interface BaseFinalizeFunc {
    (g_class: TypeClass): void
}
export interface BaseInitFunc {
    (g_class: TypeClass): void
}
export interface BindingTransformFunc {
    (binding: Binding, from_value: Value, to_value: Value): boolean
}
export interface BoxedCopyFunc {
    (boxed: object): object
}
export interface BoxedFreeFunc {
    (boxed: object): void
}
export interface Callback {
    (): void
}
export interface ClassFinalizeFunc {
    (g_class: TypeClass, class_data?: object | null): void
}
export interface ClassInitFunc {
    (g_class: TypeClass, class_data?: object | null): void
}
export interface ClosureMarshal {
    (closure: Closure, return_value: Value | null, param_values: Value[], invocation_hint?: object | null, marshal_data?: object | null): void
}
export interface ClosureNotify {
    (data: object | null, closure: Closure): void
}
export interface InstanceInitFunc {
    (instance: TypeInstance, g_class: TypeClass): void
}
export interface InterfaceFinalizeFunc {
    (g_iface: TypeInterface, iface_data?: object | null): void
}
export interface InterfaceInitFunc {
    (g_iface: TypeInterface, iface_data?: object | null): void
}
export interface ObjectFinalizeFunc {
    (object: Object): void
}
export interface ObjectGetPropertyFunc {
    (object: Object, property_id: number, value: Value, pspec: ParamSpec): void
}
export interface ObjectSetPropertyFunc {
    (object: Object, property_id: number, value: Value, pspec: ParamSpec): void
}
export interface SignalAccumulator {
    (ihint: SignalInvocationHint, return_accu: Value, handler_return: Value, data?: object | null): boolean
}
export interface SignalEmissionHook {
    (ihint: SignalInvocationHint, param_values: Value[], data?: object | null): boolean
}
export interface ToggleNotify {
    (data: object | null, object: Object, is_last_ref: boolean): void
}
export interface TypeClassCacheFunc {
    (cache_data: object | null, g_class: TypeClass): boolean
}
export interface TypeInterfaceCheckFunc {
    (check_data: object | null, g_iface: TypeInterface): void
}
export interface TypePluginCompleteInterfaceInfo {
    (plugin: TypePlugin, instance_type: number, interface_type: number, info: InterfaceInfo): void
}
export interface TypePluginCompleteTypeInfo {
    (plugin: TypePlugin, g_type: number, info: TypeInfo, value_table: TypeValueTable): void
}
export interface TypePluginUnuse {
    (plugin: TypePlugin): void
}
export interface TypePluginUse {
    (plugin: TypePlugin): void
}
export interface ValueTransform {
    (src_value: Value, dest_value: Value): void
}
export interface WeakNotify {
    (data: object | null, where_the_object_was: Object): void
}
export class TypePlugin {
    /* Methods of GObject.TypePlugin */
    complete_interface_info(instance_type: number, interface_type: number, info: InterfaceInfo): void
    complete_type_info(g_type: number, info: TypeInfo, value_table: TypeValueTable): void
    unuse(): void
    use(): void
    static name: string
}
export interface Binding_ConstructProps extends Object_ConstructProps {
    flags?:BindingFlags
    source?:Object
    source_property?:string
    target?:Object
    target_property?:string
}
export class Binding {
    /* Properties of GObject.Binding */
    /* Fields of GObject.Object */
    g_type_instance:TypeInstance
    /* Methods of GObject.Binding */
    get_flags(): BindingFlags
    get_source(): Object
    get_source_property(): string
    get_target(): Object
    get_target_property(): string
    unbind(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: Object, target_property: string, flags: BindingFlags): Binding
    bind_property_full(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: Closure, transform_from: Closure): Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: ParamSpec): void
    ref(): Object
    ref_sink(): Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: Value, pspec: ParamSpec): void
    vfunc_notify?(pspec: ParamSpec): void
    vfunc_set_property?(property_id: number, value: Value, pspec: ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Binding, pspec: ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: Binding_ConstructProps)
}
export interface InitiallyUnowned_ConstructProps extends Object_ConstructProps {
}
export class InitiallyUnowned {
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance:TypeInstance
    /* Fields of GObject.Object */
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: Object, target_property: string, flags: BindingFlags): Binding
    bind_property_full(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: Closure, transform_from: Closure): Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: ParamSpec): void
    ref(): Object
    ref_sink(): Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: Value, pspec: ParamSpec): void
    vfunc_notify?(pspec: ParamSpec): void
    vfunc_set_property?(property_id: number, value: Value, pspec: ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: InitiallyUnowned, pspec: ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: InitiallyUnowned_ConstructProps)
}
export interface Object_ConstructProps  {
}
export class Object {
    /* Fields of GObject.Object */
    g_type_instance:TypeInstance
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: Object, target_property: string, flags: BindingFlags): Binding
    bind_property_full(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: Closure, transform_from: Closure): Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: ParamSpec): void
    ref(): Object
    ref_sink(): Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: Value, pspec: ParamSpec): void
    vfunc_notify?(pspec: ParamSpec): void
    vfunc_set_property?(property_id: number, value: Value, pspec: ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Object, pspec: ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: Object_ConstructProps)
    static new(object_type: number, names: string[], values: Value[]): Object
    static newv(object_type: number, parameters: Parameter[]): Object
    static compat_control(what: number, data?: object | null): number
    static interface_find_property(g_iface: TypeInterface, property_name: string): ParamSpec
    static interface_install_property(g_iface: TypeInterface, pspec: ParamSpec): void
    static interface_list_properties(g_iface: TypeInterface): ParamSpec[]
}
export class ParamSpec {
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:number
    owner_type:number
    /* Methods of GObject.ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfunc_finalize?(): void
    vfunc_value_set_default?(value: Value): void
    vfunc_value_validate?(value: Value): boolean
    vfunc_values_cmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecBoolean {
    /* Fields of GObject.ParamSpecBoolean */
    parent_instance:ParamSpec
    default_value:boolean
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:number
    owner_type:number
    /* Methods of GObject.ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfunc_finalize?(): void
    vfunc_value_set_default?(value: Value): void
    vfunc_value_validate?(value: Value): boolean
    vfunc_values_cmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecBoxed {
    /* Fields of GObject.ParamSpecBoxed */
    parent_instance:ParamSpec
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:number
    owner_type:number
    /* Methods of GObject.ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfunc_finalize?(): void
    vfunc_value_set_default?(value: Value): void
    vfunc_value_validate?(value: Value): boolean
    vfunc_values_cmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecChar {
    /* Fields of GObject.ParamSpecChar */
    parent_instance:ParamSpec
    minimum:number
    maximum:number
    default_value:number
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:number
    owner_type:number
    /* Methods of GObject.ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfunc_finalize?(): void
    vfunc_value_set_default?(value: Value): void
    vfunc_value_validate?(value: Value): boolean
    vfunc_values_cmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecDouble {
    /* Fields of GObject.ParamSpecDouble */
    parent_instance:ParamSpec
    minimum:number
    maximum:number
    default_value:number
    epsilon:number
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:number
    owner_type:number
    /* Methods of GObject.ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfunc_finalize?(): void
    vfunc_value_set_default?(value: Value): void
    vfunc_value_validate?(value: Value): boolean
    vfunc_values_cmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecEnum {
    /* Fields of GObject.ParamSpecEnum */
    parent_instance:ParamSpec
    enum_class:EnumClass
    default_value:number
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:number
    owner_type:number
    /* Methods of GObject.ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfunc_finalize?(): void
    vfunc_value_set_default?(value: Value): void
    vfunc_value_validate?(value: Value): boolean
    vfunc_values_cmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecFlags {
    /* Fields of GObject.ParamSpecFlags */
    parent_instance:ParamSpec
    flags_class:FlagsClass
    default_value:number
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:number
    owner_type:number
    /* Methods of GObject.ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfunc_finalize?(): void
    vfunc_value_set_default?(value: Value): void
    vfunc_value_validate?(value: Value): boolean
    vfunc_values_cmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecFloat {
    /* Fields of GObject.ParamSpecFloat */
    parent_instance:ParamSpec
    minimum:number
    maximum:number
    default_value:number
    epsilon:number
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:number
    owner_type:number
    /* Methods of GObject.ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfunc_finalize?(): void
    vfunc_value_set_default?(value: Value): void
    vfunc_value_validate?(value: Value): boolean
    vfunc_values_cmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecGType {
    /* Fields of GObject.ParamSpecGType */
    parent_instance:ParamSpec
    is_a_type:number
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:number
    owner_type:number
    /* Methods of GObject.ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfunc_finalize?(): void
    vfunc_value_set_default?(value: Value): void
    vfunc_value_validate?(value: Value): boolean
    vfunc_values_cmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecInt {
    /* Fields of GObject.ParamSpecInt */
    parent_instance:ParamSpec
    minimum:number
    maximum:number
    default_value:number
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:number
    owner_type:number
    /* Methods of GObject.ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfunc_finalize?(): void
    vfunc_value_set_default?(value: Value): void
    vfunc_value_validate?(value: Value): boolean
    vfunc_values_cmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecInt64 {
    /* Fields of GObject.ParamSpecInt64 */
    parent_instance:ParamSpec
    minimum:number
    maximum:number
    default_value:number
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:number
    owner_type:number
    /* Methods of GObject.ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfunc_finalize?(): void
    vfunc_value_set_default?(value: Value): void
    vfunc_value_validate?(value: Value): boolean
    vfunc_values_cmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecLong {
    /* Fields of GObject.ParamSpecLong */
    parent_instance:ParamSpec
    minimum:number
    maximum:number
    default_value:number
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:number
    owner_type:number
    /* Methods of GObject.ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfunc_finalize?(): void
    vfunc_value_set_default?(value: Value): void
    vfunc_value_validate?(value: Value): boolean
    vfunc_values_cmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecObject {
    /* Fields of GObject.ParamSpecObject */
    parent_instance:ParamSpec
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:number
    owner_type:number
    /* Methods of GObject.ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfunc_finalize?(): void
    vfunc_value_set_default?(value: Value): void
    vfunc_value_validate?(value: Value): boolean
    vfunc_values_cmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecOverride {
    /* Fields of GObject.ParamSpecOverride */
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:number
    owner_type:number
    /* Methods of GObject.ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfunc_finalize?(): void
    vfunc_value_set_default?(value: Value): void
    vfunc_value_validate?(value: Value): boolean
    vfunc_values_cmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecParam {
    /* Fields of GObject.ParamSpecParam */
    parent_instance:ParamSpec
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:number
    owner_type:number
    /* Methods of GObject.ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfunc_finalize?(): void
    vfunc_value_set_default?(value: Value): void
    vfunc_value_validate?(value: Value): boolean
    vfunc_values_cmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecPointer {
    /* Fields of GObject.ParamSpecPointer */
    parent_instance:ParamSpec
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:number
    owner_type:number
    /* Methods of GObject.ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfunc_finalize?(): void
    vfunc_value_set_default?(value: Value): void
    vfunc_value_validate?(value: Value): boolean
    vfunc_values_cmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecString {
    /* Fields of GObject.ParamSpecString */
    parent_instance:ParamSpec
    default_value:string
    cset_first:string
    cset_nth:string
    substitutor:number
    null_fold_if_empty:number
    ensure_non_null:number
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:number
    owner_type:number
    /* Methods of GObject.ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfunc_finalize?(): void
    vfunc_value_set_default?(value: Value): void
    vfunc_value_validate?(value: Value): boolean
    vfunc_values_cmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecUChar {
    /* Fields of GObject.ParamSpecUChar */
    parent_instance:ParamSpec
    minimum:number
    maximum:number
    default_value:number
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:number
    owner_type:number
    /* Methods of GObject.ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfunc_finalize?(): void
    vfunc_value_set_default?(value: Value): void
    vfunc_value_validate?(value: Value): boolean
    vfunc_values_cmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecUInt {
    /* Fields of GObject.ParamSpecUInt */
    parent_instance:ParamSpec
    minimum:number
    maximum:number
    default_value:number
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:number
    owner_type:number
    /* Methods of GObject.ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfunc_finalize?(): void
    vfunc_value_set_default?(value: Value): void
    vfunc_value_validate?(value: Value): boolean
    vfunc_values_cmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecUInt64 {
    /* Fields of GObject.ParamSpecUInt64 */
    parent_instance:ParamSpec
    minimum:number
    maximum:number
    default_value:number
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:number
    owner_type:number
    /* Methods of GObject.ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfunc_finalize?(): void
    vfunc_value_set_default?(value: Value): void
    vfunc_value_validate?(value: Value): boolean
    vfunc_values_cmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecULong {
    /* Fields of GObject.ParamSpecULong */
    parent_instance:ParamSpec
    minimum:number
    maximum:number
    default_value:number
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:number
    owner_type:number
    /* Methods of GObject.ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfunc_finalize?(): void
    vfunc_value_set_default?(value: Value): void
    vfunc_value_validate?(value: Value): boolean
    vfunc_values_cmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecUnichar {
    /* Fields of GObject.ParamSpecUnichar */
    parent_instance:ParamSpec
    default_value:number
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:number
    owner_type:number
    /* Methods of GObject.ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfunc_finalize?(): void
    vfunc_value_set_default?(value: Value): void
    vfunc_value_validate?(value: Value): boolean
    vfunc_values_cmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecValueArray {
    /* Fields of GObject.ParamSpecValueArray */
    parent_instance:ParamSpec
    element_spec:ParamSpec
    fixed_n_elements:number
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:number
    owner_type:number
    /* Methods of GObject.ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfunc_finalize?(): void
    vfunc_value_set_default?(value: Value): void
    vfunc_value_validate?(value: Value): boolean
    vfunc_values_cmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecVariant {
    /* Fields of GObject.ParamSpecVariant */
    parent_instance:ParamSpec
    type:GLib.VariantType
    default_value:GLib.Variant
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:number
    owner_type:number
    /* Methods of GObject.ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfunc_finalize?(): void
    vfunc_value_set_default?(value: Value): void
    vfunc_value_validate?(value: Value): boolean
    vfunc_values_cmp?(value1: Value, value2: Value): number
    static name: string
}
export interface TypeModule_ConstructProps extends Object_ConstructProps {
}
export class TypeModule {
    /* Fields of GObject.TypeModule */
    parent_instance:Object
    use_count:number
    type_infos:GLib.SList
    interface_infos:GLib.SList
    name:string
    /* Fields of GObject.Object */
    g_type_instance:TypeInstance
    /* Methods of GObject.TypeModule */
    add_interface(instance_type: number, interface_type: number, interface_info: InterfaceInfo): void
    register_enum(name: string, const_static_values: EnumValue): number
    register_flags(name: string, const_static_values: FlagsValue): number
    register_type(parent_type: number, type_name: string, type_info: TypeInfo, flags: TypeFlags): number
    set_name(name: string): void
    unuse(): void
    use(): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: Object, target_property: string, flags: BindingFlags): Binding
    bind_property_full(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: Closure, transform_from: Closure): Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: ParamSpec): void
    ref(): Object
    ref_sink(): Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Closure): void
    /* Methods of GObject.TypePlugin */
    complete_interface_info(instance_type: number, interface_type: number, info: InterfaceInfo): void
    complete_type_info(g_type: number, info: TypeInfo, value_table: TypeValueTable): void
    /* Virtual methods of GObject.TypeModule */
    vfunc_load?(): boolean
    vfunc_unload?(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: Value, pspec: ParamSpec): void
    vfunc_notify?(pspec: ParamSpec): void
    vfunc_set_property?(property_id: number, value: Value, pspec: ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: TypeModule, pspec: ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: TypeModule_ConstructProps)
}
export class CClosure {
    /* Fields of GObject.CClosure */
    closure:Closure
    callback:object
    static name: string
    static marshal_BOOLEAN__BOXED_BOXED(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_BOOLEAN__FLAGS(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_STRING__OBJECT_POINTER(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_VOID__BOOLEAN(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_VOID__BOXED(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_VOID__CHAR(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_VOID__DOUBLE(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_VOID__ENUM(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_VOID__FLAGS(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_VOID__FLOAT(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_VOID__INT(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_VOID__LONG(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_VOID__OBJECT(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_VOID__PARAM(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_VOID__POINTER(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_VOID__STRING(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_VOID__UCHAR(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_VOID__UINT(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_VOID__UINT_POINTER(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_VOID__ULONG(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_VOID__VARIANT(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_VOID__VOID(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_generic(closure: Closure, return_gvalue: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
}
export class Closure {
    /* Fields of GObject.Closure */
    in_marshal:number
    is_invalid:number
    marshal:any
    /* Methods of GObject.Closure */
    invalidate(): void
    invoke(param_values: Value[], invocation_hint?: object | null): /* return_value */ Value | null
    ref(): Closure
    sink(): void
    unref(): void
    static name: string
    static new_object(sizeof_closure: number, object: Object): Closure
    static new_simple(sizeof_closure: number, data?: object | null): Closure
}
export class ClosureNotifyData {
    /* Fields of GObject.ClosureNotifyData */
    data:object
    notify:ClosureNotify
    static name: string
}
export class EnumClass {
    /* Fields of GObject.EnumClass */
    g_type_class:TypeClass
    minimum:number
    maximum:number
    n_values:number
    values:EnumValue
    static name: string
}
export class EnumValue {
    /* Fields of GObject.EnumValue */
    value:number
    value_name:string
    value_nick:string
    static name: string
}
export class FlagsClass {
    /* Fields of GObject.FlagsClass */
    g_type_class:TypeClass
    mask:number
    n_values:number
    values:FlagsValue
    static name: string
}
export class FlagsValue {
    /* Fields of GObject.FlagsValue */
    value:number
    value_name:string
    value_nick:string
    static name: string
}
export class InterfaceInfo {
    /* Fields of GObject.InterfaceInfo */
    interface_init:InterfaceInitFunc
    interface_finalize:InterfaceFinalizeFunc
    interface_data:object
    static name: string
}
export class ObjectConstructParam {
    /* Fields of GObject.ObjectConstructParam */
    pspec:ParamSpec
    value:Value
    static name: string
}
export class ParamSpecPool {
    /* Methods of GObject.ParamSpecPool */
    insert(pspec: ParamSpec, owner_type: number): void
    list(owner_type: number): ParamSpec[]
    list_owned(owner_type: number): ParamSpec[]
    lookup(param_name: string, owner_type: number, walk_ancestors: boolean): ParamSpec
    remove(pspec: ParamSpec): void
    static name: string
}
export class ParamSpecTypeInfo {
    /* Fields of GObject.ParamSpecTypeInfo */
    instance_size:number
    n_preallocs:number
    instance_init:any
    value_type:number
    finalize:any
    value_set_default:any
    value_validate:any
    values_cmp:any
    static name: string
}
export class Parameter {
    /* Fields of GObject.Parameter */
    name:string
    value:Value
    static name: string
}
export class SignalInvocationHint {
    /* Fields of GObject.SignalInvocationHint */
    signal_id:number
    detail:GLib.Quark
    run_type:SignalFlags
    static name: string
}
export class SignalQuery {
    /* Fields of GObject.SignalQuery */
    signal_id:number
    signal_name:string
    itype:number
    signal_flags:SignalFlags
    return_type:number
    n_params:number
    param_types:number
    static name: string
}
export class TypeClass {
    /* Fields of GObject.TypeClass */
    /* Methods of GObject.TypeClass */
    add_private(private_size: number): void
    get_private(private_type: number): object | null
    peek_parent(): TypeClass
    unref(): void
    static name: string
    static adjust_private_offset(g_class: object | null, private_size_or_offset: number): void
    static peek(type: number): TypeClass
    static peek_static(type: number): TypeClass
    static ref(type: number): TypeClass
}
export class TypeFundamentalInfo {
    /* Fields of GObject.TypeFundamentalInfo */
    type_flags:TypeFundamentalFlags
    static name: string
}
export class TypeInfo {
    /* Fields of GObject.TypeInfo */
    class_size:number
    base_init:BaseInitFunc
    base_finalize:BaseFinalizeFunc
    class_init:ClassInitFunc
    class_finalize:ClassFinalizeFunc
    class_data:object
    instance_size:number
    n_preallocs:number
    instance_init:InstanceInitFunc
    value_table:TypeValueTable
    static name: string
}
export class TypeInstance {
    /* Fields of GObject.TypeInstance */
    /* Methods of GObject.TypeInstance */
    get_private(private_type: number): object | null
    static name: string
}
export class TypeInterface {
    /* Fields of GObject.TypeInterface */
    /* Methods of GObject.TypeInterface */
    peek_parent(): TypeInterface
    static name: string
    static add_prerequisite(interface_type: number, prerequisite_type: number): void
    static get_plugin(instance_type: number, interface_type: number): TypePlugin
    static peek(instance_class: TypeClass, iface_type: number): TypeInterface
    static prerequisites(interface_type: number): number
}
export class TypePluginClass {
    /* Fields of GObject.TypePluginClass */
    use_plugin:TypePluginUse
    unuse_plugin:TypePluginUnuse
    complete_type_info:TypePluginCompleteTypeInfo
    complete_interface_info:TypePluginCompleteInterfaceInfo
    static name: string
}
export class TypeQuery {
    /* Fields of GObject.TypeQuery */
    type:number
    type_name:string
    class_size:number
    instance_size:number
    static name: string
}
export class TypeValueTable {
    /* Fields of GObject.TypeValueTable */
    value_init:any
    value_free:any
    value_copy:any
    value_peek_pointer:any
    collect_format:string
    collect_value:any
    lcopy_format:string
    lcopy_value:any
    static name: string
}
export class Value {
    /* Fields of GObject.Value */
    data:_Value__data__union[]
    /* Methods of GObject.Value */
    copy(dest_value: Value): void
    dup_object(): Object
    dup_string(): string
    dup_variant(): GLib.Variant
    fits_pointer(): boolean
    get_boolean(): boolean
    get_boxed(): object | null
    get_char(): number
    get_double(): number
    get_enum(): number
    get_flags(): number
    get_float(): number
    get_gtype(): number
    get_int(): number
    get_int64(): number
    get_long(): number
    get_object(): Object
    get_param(): ParamSpec
    get_pointer(): object | null
    get_schar(): number
    get_string(): string
    get_uchar(): number
    get_uint(): number
    get_uint64(): number
    get_ulong(): number
    get_variant(): GLib.Variant
    init(g_type: number): Value
    init_from_instance(instance: TypeInstance): void
    peek_pointer(): object | null
    reset(): Value
    set_boolean(v_boolean: boolean): void
    set_boxed(v_boxed?: object | null): void
    set_boxed_take_ownership(v_boxed?: object | null): void
    set_char(v_char: number): void
    set_double(v_double: number): void
    set_enum(v_enum: number): void
    set_flags(v_flags: number): void
    set_float(v_float: number): void
    set_gtype(v_gtype: number): void
    set_instance(instance?: object | null): void
    set_int(v_int: number): void
    set_int64(v_int64: number): void
    set_long(v_long: number): void
    set_object(v_object?: Object | null): void
    set_param(param?: ParamSpec | null): void
    set_pointer(v_pointer?: object | null): void
    set_schar(v_char: number): void
    set_static_boxed(v_boxed?: object | null): void
    set_static_string(v_string?: string | null): void
    set_string(v_string?: string | null): void
    set_string_take_ownership(v_string?: string | null): void
    set_uchar(v_uchar: number): void
    set_uint(v_uint: number): void
    set_uint64(v_uint64: number): void
    set_ulong(v_ulong: number): void
    set_variant(variant?: GLib.Variant | null): void
    take_boxed(v_boxed?: object | null): void
    take_string(v_string?: string | null): void
    take_variant(variant?: GLib.Variant | null): void
    transform(dest_value: Value): boolean
    unset(): void
    static name: string
    static type_compatible(src_type: number, dest_type: number): boolean
    static type_transformable(src_type: number, dest_type: number): boolean
}
export class ValueArray {
    /* Fields of GObject.ValueArray */
    n_values:number
    values:Value
    /* Methods of GObject.ValueArray */
    append(value?: Value | null): ValueArray
    copy(): ValueArray
    free(): void
    get_nth(index_: number): Value
    insert(index_: number, value?: Value | null): ValueArray
    prepend(value?: Value | null): ValueArray
    remove(index_: number): ValueArray
    sort(compare_func: GLib.CompareDataFunc): ValueArray
    static name: string
    static new(n_prealloced: number): ValueArray
    constructor(n_prealloced: number)
    static new(n_prealloced: number): ValueArray
}
export class WeakRef {
    /* Methods of GObject.WeakRef */
    static name: string
}
export class TypeCValue {
    /* Fields of GObject.TypeCValue */
    v_int:number
    v_long:number
    v_int64:number
    v_double:number
    v_pointer:object
    static name: string
}
export class _Value__data__union {
    /* Fields of GObject._Value__data__union */
    v_int:number
    v_uint:number
    v_long:number
    v_ulong:number
    v_int64:number
    v_uint64:number
    v_float:number
    v_double:number
    v_pointer:object
    static name: string
}
type SignalCMarshaller = ClosureMarshal
type SignalCVaMarshaller = any
type Type = number